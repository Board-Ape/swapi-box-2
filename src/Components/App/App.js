import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FilmTextCrawl from '../FilmTextCrawl/FilmTextCrawl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // crawlFilm: '',
      favorites: [],
      characters: [],
      worlds: ['Mars', 'Venus', 'Earth'],
      vehicles: ['Rover', 'Mercedes', 'BMW']
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
    console.log(responseCharacters);
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

  render() {
    return (
      <div className="App">
        // <p>{this.state.crawlFilm}</p>
        <Header fetchCharacters={this.getCharacters}
                favorites={this.state.favorites}
                characters={this.state.characters}
                worlds={this.state.worlds}
                vehicles={this.state.vehicles} />
        <FilmTextCrawl />
      </div>
    );
  }
}

export default App;
