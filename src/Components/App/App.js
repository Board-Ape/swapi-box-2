import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawlFilm: '',
      favorites: ['1','2','3','4'],
      characters: ['Sam', 'Jorge', 'Jason'],
      worlds: ['Mars', 'Venus', 'Earth'],
      vehicles: ['Rover', 'Mercedes', 'BMW']
    };
  }

  async componentDidMount() {
    const initialFetch = await fetch('https://swapi.co/api/films/');
    const responseFilmData = await initialFetch.json();
    const crawlFilmData =
      responseFilmData.results.map( film => film.opening_crawl );
    const crawlFilm = this.randomlyGenerateCrawl(crawlFilmData);
    this.setState({crawlFilm})
  }

  randomlyGenerateCrawl(crawlFilmData) {
    const randomNumber = Math.floor((Math.random() * crawlFilmData.length));
    return crawlFilmData[randomNumber];
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.crawlFilm}</p>
        <Header favorites={this.state.favorites}
                characters={this.state.characters}
                worlds={this.state.worlds}
                vehicles={this.state.vehicles}/>
      </div>
    );
  }
}

export default App;
