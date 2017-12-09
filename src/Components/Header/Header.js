import React from 'react';
import './Header.css';

const Header = ({handleUpdateState, numberOfFavorites}) => {
  return (
    <div className='header-component'>
      <h1>Star-Swapi-Box</h1>
      <h6>Favorites <span>{numberOfFavorites}</span></h6>
      <div>
        <button onClick={() => handleUpdateState(0)}>Characters</button>
        <button onClick={() => handleUpdateState(1)}>Worlds</button>
				<button onClick={() => handleUpdateState(2)}>Vehicles</button>
				<button onClick={() => handleUpdateState(3)}>Favorites</button>
      </div>
    </div>
  );
};

export default Header;
