import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({name, lineOne, lineTwo, lineThree, lineFour, id, cardType, favoriteStatus, favoriteCard}) => {

	const lineOneTitle = ['Homeworld: ', 'Terrain: ', 'Model: '];
	const lineTwoTitle = ['Species: ', 'Population: ', 'Class: '];
	const lineThreeTitle = ['Homeworld Population: ', 'Climate: ', 'Passengers: '];
	const lineFourTitle = ['', 'Known Residents: ', ''];

	let cardDisplay = (
		<div className="card-display">
			<div className="card-header-box">
				<h3>{name}</h3>
			</div>
			<h4><span>{lineOneTitle[cardType]}</span>{lineOne}</h4>
			<h4><span>{lineTwoTitle[cardType]}</span>{lineTwo}</h4>
			<h4><span>{lineThreeTitle[cardType]}</span>{lineThree}</h4>
			<h4 className="overflow"><span>{lineFourTitle[cardType]}</span>{lineFour}</h4>
			<button onClick={() => favoriteCard(id)}
				className={ favoriteStatus === false ? 'star-outline' : 'star-solid' }
			></button>
		</div>
	);

	return (
		<div className={ favoriteStatus === false ? 'card-component' : 'card-component fave-card'}>
			{cardDisplay}
		</div>
	);
};

Card.propTypes = {
  name: PropTypes.string,
  lineOne: PropTypes.string,
  lineTwo: PropTypes.string,
  lineThree: PropTypes.string,
  lineFour: PropTypes.string,
  id: PropTypes.number,
  cardType: PropTypes.number,
  favoriteStatus: PropTypes.bool,
  favoriteCard: PropTypes.func
};

export default Card;
