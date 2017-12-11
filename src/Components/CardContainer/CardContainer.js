import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CardContainer = ({favoriteCard, active, items}) => {
  let displayItems;

  if (active === 3) {
    displayItems = items.filter(item => item.favorite === true);
  } else {
    displayItems = items.filter(item => item.cardType === active);
  }

  let currentDisplay = displayItems.map((item) => {
    return  <Card name={item.name}
                  lineOne={item.lineOne}
                  lineTwo={item.lineTwo}
                  lineThree={item.lineThree}
                  lineFour={item.lineFour}
                  key={item.id}
                  id={item.id}
                  cardType={item.cardType}
                  favoriteStatus={item.favorite}
                  favoriteCard={favoriteCard} />;
  });

  return (
    <div className="card-container-component">

      <div className="card-container">
        {currentDisplay}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  favoriteCard: PropTypes.func,
  active: PropTypes.number,
  items: PropTypes.array
};

export default CardContainer;
