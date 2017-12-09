import React from 'react';
import './Card.css';

const Card = ({name, lineOne, lineTwo, lineThree, lineFour, type, favoriteCard}) => {
  const titleOne = ['Homeworld: ', 'Terrain: ', 'Model: '];
  const titleTwo = ['Species: ', 'Population: ', 'Class: '];
  const titleThree = ['Homeworld Population: ', 'Climate: ', 'Passengers: '];
  const titleFour = ['', 'Known Residents: ', ''];

  let cardDisplay = (
    <div>
      <h3>{name}</h3>
      <h4>{titleOne[type]}{lineOne}</h4>
      <h4>{titleTwo[type]}{lineTwo}</h4>
      <h4>{titleThree[type]}{lineThree}</h4>
      <h4>{titleFour[type]}{lineFour}</h4>
    </div>
  );
  return (
    <div className='card-component'>
      {cardDisplay}
    </div>
  )
}

export default Card;
