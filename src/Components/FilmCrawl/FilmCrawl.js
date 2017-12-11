import React, { Component } from 'react';
import './FilmCrawl.css';
import { getFilmCrawl } from '../helper/apiCalls.js';

class FilmCrawl extends Component {
  constructor() {
    super();

    this.state = {
      story: {}
    };
  }

  componentDidMount = async () => {
    let filmCrawl = await getFilmCrawl();

    this.setState({ story: filmCrawl });
  }

  render() {
    return (
      <div className="film-crawl-container">
        <div className="film-crawl">
          <div className="crawl-content">
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
      </div>
    );
  }
}

export default FilmCrawl;
