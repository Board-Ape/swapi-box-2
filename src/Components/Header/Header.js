import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({handleUpdateState, numberOfFavorites}) => {

	return (
		<div className="header-component">
			<div className="logo"></div>
      <div className="header-title">Swapi-Box</div>
			<div className="header-buttons">
				<button onClick={() => handleUpdateState(0)}>CHARACTERS</button>
				<button onClick={() => handleUpdateState(1)}>WORLDS</button>
				<button onClick={() => handleUpdateState(2)}>VEHICLES</button>
				<button onClick={() => handleUpdateState(3)}>FAVORITES<span>{numberOfFavorites}</span></button>
			</div>
		</div>
	);
};

Header.propTypes = {
  handleUpdateState: PropTypes.func,
  numberOfFavorites: PropTypes.number
};

export default Header;
