import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import FilmCrawl from '../FilmCrawl/FilmCrawl.js';
import CardContainer from '../CardContainer/CardContainer.js';
import { getCharacters, getWorlds, getVehicles } from '../helper/apiCalls.js';

class App extends Component {
	constructor() {
		super();

		this.state = {
			containerTitle: '',
			items: [],
			active: -1,
			favorites: 0
		}
	}

	handleUpdateState = (type) => {
		const titleArray = ['characters', 'worlds', 'vehicles', 'favorites']
		if (type <= 3) {
			this.setState({active: type, containerTitle: titleArray[type]})
		}
	}
	// getCharacters = async () => {
	// 	const fetchChars = await fetch('https://swapi.co/api/people/')
	// 	const charsObj = await fetchChars.json();
	// 	let idCounter = 0;
	// 	const charsArray = charsObj.results.map( async (char) => {
	// 		const fetchHomeworld = await fetch(char.homeworld);
	// 		const homeworld = await fetchHomeworld.json();
	// 		const fetchSpecies = await fetch(char.species[0]);
	// 		const species = await fetchSpecies.json();
	// 		const newCard = {cardType: 0,
	// 										 id: 0 + idCounter,
	// 										 name: char.name,
	// 										 lineOne: homeworld.name,
	// 										 lineTwo: species.name,
	// 										 lineThree: homeworld.population,
	// 										 favorite: false}
	// 		idCounter++;
	// 		return newCard;
	// 	})
	// 	return Promise.all(charsArray)
	// }
	//
	// getWorlds = async () => {
	// 	const fetchWorlds = await fetch('https://swapi.co/api/planets/')
	// 	const worldsObj = await fetchWorlds.json();
	// 	let idCounter = 0;
	// 	const worldsArray = worldsObj.results.map( async (world) => {
	// 		const residentArray = await world.residents.map( async (resident) => {
	// 			const newResident = await fetch(resident);
	// 			const cleanResident = await newResident.json();
	// 			const nameToAdd = cleanResident.name;
	// 			return nameToAdd;
	// 		});
	// 		const residentPromises = await Promise.all(residentArray);
	// 		const newCard =  {cardType: 1,
	// 											id: 100 + idCounter,
	// 											name: world.name,
	// 											lineOne: world.terrain,
	// 											lineTwo: world.population,
	// 											lineThree: world.climate,
	// 											lineFour: residentPromises,
	// 											favorite: false}
	// 		idCounter++
	// 		return newCard;
	// 	})
	// 	return Promise.all(worldsArray)
	// }
	//
	// getVehicles = async () => {
	// 	const fetchVehicles = await fetch('https://swapi.co/api/vehicles/')
	// 	const vehiclesObj = await fetchVehicles.json();
	// 	let idCounter = 0;
	// 	const vehiclesArray = vehiclesObj.results.map( async (vehicle) => {
	// 		const newCard = {cardType: 2,
	// 										 id: 200 + idCounter,
	// 										 name: vehicle.name,
	// 										 lineOne: vehicle.model,
	// 						         lineTwo: vehicle.vehicle_class,
	// 						         lineThree: vehicle.passengers,
	// 						         favorite: false}
	// 	idCounter++
	// 	return newCard;
	// 	})
	// 	return Promise.all(vehiclesArray)
	// }

	findFavorites = () => {
		const favorites = this.state.items.filter(item => item.favorite === true)
		const numberOfFavorites = favorites.length
		this.setState({favorites: numberOfFavorites})
	}

	componentDidMount = async () => {
		let allChars = await getCharacters();
		let allWorlds = await getWorlds();
		let allVehicles = await getVehicles();
		let allItems = await [...allChars, ...allWorlds, ...allVehicles]
		this.setState({items: allItems})
	}

	favoriteCard = (id) => {
		let getCardIndex = this.state.items.findIndex(item => item.id === id)
		let newState = this.state.items;

		newState[getCardIndex].favorite = !newState[getCardIndex].favorite;
		this.setState({items: newState})
		this.findFavorites();
	}

  render() {
    return (
      <div className="app-component">
		    <Header handleUpdateState={this.handleUpdateState}
		    				numberOfFavorites={this.state.favorites} />

      	<CardContainer containerTitle={this.state.containerTitle}
  								 	 		 favoriteCard={this.favoriteCard}
  								 	 				   active={this.state.active}
  								 	 				    items={this.state.items} />

    		<FilmCrawl active={this.state.active} />
      </div>
    );
  }
}

export default App;
