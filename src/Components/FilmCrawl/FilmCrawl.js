import React, { Component } from 'react';
import pullOpeningCrawl from '../helper/helper';
import './FilmCrawl.css';

class FilmCrawl extends Component {
  constructor() {
    super();
    this.state = {
      story: {}
    };
  }

  componentDidMount() {
		let randomFilm = Math.ceil(Math.random() * 7)

		fetch(`https://swapi.co/api/films/${randomFilm}/`)
		  .then(data => data.json())
		  .then(data => {
        const filmCrawl = pullOpeningCrawl(data);

        this.setState({ story: filmCrawl })
		})
	}

  render() {
    return(
      <div className='film-crawl'>
        <div className='crawl-content'>
          <h5>Episode {this.state.story.episode}</h5>
          <h3>{this.state.story.title}</h3>
          {this.state.story.crawl &&
            <div>
              <p>{this.state.story.crawl[0]}</p>
              <p>{this.state.story.crawl[1]}</p>
              <p>{this.state.story.crawl[2]}</p>
            </div>
          }
          <h4>{this.state.story.date}</h4>
        </div>
      </div>
    )
  }
};

export default FilmCrawl;
