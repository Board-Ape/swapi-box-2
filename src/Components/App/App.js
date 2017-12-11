import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import FilmCrawl from '../FilmCrawl/FilmCrawl.js';
import CardContainer from '../CardContainer/CardContainer.js';
import { getCharacters, getWorlds, getVehicles } from '../helper/apiCalls.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      containerTitle: '',
      items: [],
      active: -1,
      favorites: 0
    };
  }

  handleUpdateState = (type) => {
    const titleArray = ['characters', 'worlds', 'vehicles', 'favorites'];

    if (type <= 3) {
      this.setState({active: type, containerTitle: titleArray[type]});
    }
  }

  findFavorites = () => {
    const favorites = this.state.items.filter(item => item.favorite === true);
    const numberOfFavorites = favorites.length;

    this.setState({favorites: numberOfFavorites});
  }

  componentDidMount = async () => {
    let allChars = await getCharacters();
    let allWorlds = await getWorlds();
    let allVehicles = await getVehicles();
    let allItems = await [...allChars, ...allWorlds, ...allVehicles];

    this.setState({items: allItems});
  }

  favoriteCard = (id) => {
    let getCardIndex = this.state.items.findIndex(item => item.id === id);
    let newState = this.state.items;

    newState[getCardIndex].favorite = !newState[getCardIndex].favorite;
    this.setState({items: newState});
    this.findFavorites();
  }

  render() {
    return (
      <div className="app-component">
        <Header handleUpdateState={this.handleUpdateState}
                numberOfFavorites={this.state.favorites} />

        <CardContainer containerTitle={this.state.containerTitle}
                       favoriteCard={this.favoriteCard}
                       active={this.state.active}
                       items={this.state.items} />

        <FilmCrawl active={this.state.active} />
      </div>
    );
  }
}

export default App;
