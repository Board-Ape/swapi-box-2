import React from 'react';
import './Header.css';

const Header = ({favorites, handleUpdateState}) => {
  return (
    <div className='header-component'>
      <h1>Star-Swapi-Box</h1>
      <h3>Favorites <span>{favorites.length}</span></h3>
      <div>
        <button onClick={() => {console.log('hi');handleUpdateState('characters')}}>Character</button>
      </div>
    </div>
  );
};

export default Header;

// <button onClick={props.fetchWorlds}>Worlds</button>
// <button onClick={props.fetchVehicles}>Vehicles</button>
