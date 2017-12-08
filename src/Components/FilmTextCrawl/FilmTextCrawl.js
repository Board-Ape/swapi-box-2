import React, { Component } from 'react';
import fetchFilmTextCrawl from '../helper/helper';
import './FilmTextCrawl.css';

class FilmTextCrawl extends Component {
  constructor() {
    super();
    this.state = {
      story: {}
    };
  }

  componentDidMount() {
    const storyCrawl = fetchFilmTextCrawl(7);
    this.setState({ story: storyCrawl });
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
        </div>
      </div>
    )
  }
};

export default FilmTextCrawl;
