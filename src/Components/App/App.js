import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FilmTextCrawl from '../FilmTextCrawl/FilmTextCrawl';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // crawlFilm: '',
      favorites: ['1','2'],
      containerTitle: 'Select The Force',
      characters: [],
      worlds: ['Mars', 'Venus', 'Earth'],
      vehicles: ['Rover', 'Mercedes', 'BMW'],
      loading: false
    };
  }

  // async componentDidMount() {
  //   const initialFetch = await fetch('https://swapi.co/api/films/');
  //   const responseFilmData = await initialFetch.json();
  //   const crawlFilmData =
  //     responseFilmData.results.map( film => film.opening_crawl );
  //   const crawlFilm = this.randomlyGenerateCrawl(crawlFilmData);
  //   this.setState({crawlFilm})
  // }

  // randomlyGenerateCrawl(crawlFilmData) {
  //   const randomNumber = Math.floor((Math.random() * crawlFilmData.length));
  //   return crawlFilmData[randomNumber];
  // }

  getCharacters = async () => {
    const fetchCharacters = await fetch('https://swapi.co/api/people/')
    const responseCharacters = await fetchCharacters.json()
    const charactersArray = responseCharacters.results.map( async (characters) => {
      const fetchHomeworld = await fetch(characters.homeworld);
      const homeworld = await fetchHomeworld.json();
      const fetchSpecies = await fetch(characters.species[0]);
      const species = await fetchSpecies.json();
      return {name: characters.name,
              homeworld: homeworld.name,
              species: species.name,
              homePop: homeworld.population}
    })
    return Promise.all(charactersArray)
  }

  getWorlds = async () => {
    const fetchWorlds = await fetch('https://swapi.co/api/planets/');
    const responseWorlds = await fetchWorlds.json();
    const worldsArray = responseWorlds.results.map( async (world) => {
      const residentArray = await world.residents.map( async (resident) => {
        const newResident = await fetch(resident);
        const cleanResident = await newResident.json();
        const nameToAd = cleanResident.name;
        return nameToAd;
      })
      const residentPromises = await Promise.all(residentArray);
      return {name: world.name,
              terrain: world.terrain,
              population: world.population,
              climate: world.climate,
              residents: residentPromises}
    })
    return Promise.all(worldsArray)
  }

  handleUpdateState = async (updateType) => {
    let array;
    if(updateType === 'characters') {
      this.setState({containerTitle: 'Characters',
                      loading: true,
                      worlds: [],
                      vehicles: []})
      array = await this.getCharacters();
    } else if (updateType === 'worlds') {
        this.setState({containerTitle: 'Worlds',
                        loading: true,
                        characters: [],
                        vehicle: []})
        array = await this.getWorlds();
    }
    this.setState({[updateType]: array, loading: false})
  }

  favoriteCard = (cardObject) => {
    console.log('favoriteCard function');
  }

  render() {
    return (
      <div className="App">
        <Header handleUpdateState={this.handleUpdateState}
                favorites={this.state.favorites}
                getWorlds={this.getWorlds}/>
        <CardContainer containerTitle={this.state.containerTitle}
                        characters={this.state.characters}
                        worlds={this.state.worlds}
                        favorites={this.state.favorites}
                        favoriteCardFunc={this.favoriteCard} />
        <FilmTextCrawl />
      </div>
    );
  }
}

export default App;
