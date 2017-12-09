import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({
  containerTitle,
  characters,
  worlds,
  favorites,
  favoriteCardFunc }) => {
  const displayChars = characters.map((character, index) => {
    return <Card name={character.name}
                  lineOne={character.homeworld}
                  lineTwo={character.species}
                  lineThree={character.homePop}
                  key={index}
                  type={0}
                  favoriteCardFunc={favoriteCardFunc} />
  });

  const displayWorlds = worlds.map((world, index) => {
    return <Card name={world.name}
                   lineOne={world.terrain}
                   lineTwo={world.population}
                   lineThree={world.climate}
                   lineFour={world.residents.join(', ')}
                   key={index}
                   type={1}
                   favoriteCardFunc={favoriteCardFunc} />
  });

  return (
    <div className='card-container-component'>
      <h2>{containerTitle}</h2>
      <div className='card-container'>
        {displayChars}
        {displayWorlds}
      </div>
    </div>
  );
};

export default CardContainer;
