import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawlFilm: ''
    };
  }

  async componentDidMount() {
    const initialFetch = await fetch('https://swapi.co/api/films/');
    const responseFilmData = await initialFetch.json();
    const crawlFilmData = responseFilmData.results.map( film => film.opening_crawl );
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
      </div>
    );
  }
}

export default App;
