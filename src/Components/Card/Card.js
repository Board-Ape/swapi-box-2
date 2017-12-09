import React from 'react';
import './Card.css';

const Card = ({name,
                lineOne,
                lineTwo,
                lineThree,
                lineFour,
                id,
                cardType,
                favoriteCard}) => {
  const titleOne = ['Homeworld: ', 'Terrain: ', 'Model: '];
  const titleTwo = ['Species: ', 'Population: ', 'Class: '];
  const titleThree = ['Homeworld Population: ', 'Climate: ', 'Passengers: '];
  const titleFour = ['', 'Known Residents: ', ''];

  let cardDisplay = (
    <div>
      <button onClick={() => favoriteCard(id)}>ADD</button>
      <h3>{name}</h3>
      <h4>{titleOne[cardType]}{lineOne}</h4>
      <h4>{titleTwo[cardType]}{lineTwo}</h4>
      <h4>{titleThree[cardType]}{lineThree}</h4>
      <h4>{titleFour[cardType]}{lineFour}</h4>
    </div>
  );
  return (
    <div className='card-component'>
      {cardDisplay}
    </div>
  )
}

export default Card;
