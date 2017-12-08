import React from 'react';
import './Header.css';

const Header = (props) => {
  console.log(props);
  console.log(props.passingPropsFunction());

  return (
    <div className='header-component'>
      <h1>Star-Swapi-Box</h1>
      <h3>Favorites <span>{props.favorites.length}</span></h3>
      <div>
        <button onClick={props.fetchCharacters}>Characters</button>
        <button onClick={props.fetchWorlds}>Worlds</button>
        <button onClick={props.fetchVehicles}>Vehicles</button>
      </div>
    </div>
  );
};

export default Header;
