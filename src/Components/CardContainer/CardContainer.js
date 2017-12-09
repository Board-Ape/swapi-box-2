import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card.js';

const CardContainer = ({ containerTitle,
													favoriteCard,
													active,
													items }) => {

		// const displayChars = characters.map((character, index) => {
		// 	return <Card name={character.name}
		// 							 lineOne={character.homeworld}
		// 							 lineTwo={character.species}
		// 							 lineThree={character.homePop}
		// 							 key={index}
		// 							 type={0}
	  //                favoriteCardFunc={favoriteCardFunc} />
		// })
		//
		// const displayWorlds = worlds.map((world, index) => {
		// 	return <Card name={world.name}
		// 							 lineOne={world.terrain}
		// 							 lineTwo={world.population}
		// 							 lineThree={world.climate}
		// 							 lineFour={world.residents.join(', ')}
		// 							 key={index}
		// 							 type={1}
		// 							 favoriteCardFunc={favoriteCardFunc} />
		// })
		//
		// const displayVehicles = vehicles.map((vehicle, index) => {
		// 	return <Card name={vehicle.name}
		// 							 lineOne={vehicle.model}
		// 							 lineTwo={vehicle.vClass}
		// 							 lineThree={vehicle.passengers}
		// 							 key={index}
		// 							 type={2}
		// 							 favoriteCardFunc={favoriteCardFunc} />
		// })

	let displayItems = items.filter(item => item.cardType === active)

	let currrentDisplay = displayItems.map((item) => {
		return <Card name={item.name}
									lineOne={item.lineOne}
									lineTwo={item.lineTwo}
									lineThree={item.lineThree}
									lineFour={item.lineFour}
									key={item.id}
									id={item.id}
									cardType={item.cardType}
									favorite={favoriteCard} />
	})

	return (
		<div className="card-container-component">
			<h2>{containerTitle}</h2>
			<div className="card-container">
				{currrentDisplay}
			</div>
		</div>
	)
}

export default CardContainer;
