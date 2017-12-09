import React from 'react';
import './Header.css';

const Header = ({favorites, getWorlds, getVehicles, handleUpdateState}) => {
  return (
    <div className='header-component'>
      <h1>Star-Swapi-Box</h1>
      <h3>Favorites <span>{favorites.length}</span></h3>
      <div>
        <button onClick={() => handleUpdateState('characters')}>Characters</button>
        <button onClick={() => handleUpdateState('worlds')}>Worlds</button>
				<button onClick={() => handleUpdateState('vehicles')}>Vehicles</button>
      </div>
    </div>
  );
};

export default Header;
