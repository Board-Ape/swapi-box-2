import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import FilmCrawl from '../FilmCrawl/FilmCrawl.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
	constructor() {
		super();

		this.state = {
			containerTitle: 'Select The Force',
			items: [],
			active: 'load'
		}
	}

	handleUpdateState = (type) => {
		this.setState({active: type})
	}

	getCharacters = async () => {
		const fetchChars = await fetch('https://swapi.co/api/people/')
		const charsObj = await fetchChars.json();
		console.log(charsObj)
		let idCounter = 0;
		const charsArray = charsObj.results.map( async (char) => {
			const fetchHomeworld = await fetch(char.homeworld);
			const homeworld = await fetchHomeworld.json();
			const fetchSpecies = await fetch(char.species[0]);
			const species = await fetchSpecies.json();
			const newCard = {cardType: 0,
												id: 0 + idCounter,
												name: char.name,
												lineOne: homeworld.name,
												lineTwo: species.name,
												lineThree: homeworld.population,
												favorite: false}
			idCounter++;
			return newCard;
		})
		return Promise.all(charsArray)
	}

	getWorlds = async () => {
		const fetchWorlds = await fetch('https://swapi.co/api/planets/')
		const worldsObj = await fetchWorlds.json();
		console.log(worldsObj)
		let idCounter = 0;
		const worldsArray = worldsObj.results.map( async (world) => {
			const residentArray = await world.residents.map( async (resident) => {
				const newResident = await fetch(resident);
				const cleanResident = await newResident.json();
				const nameToAdd = cleanResident.name;
				return nameToAdd;
			});
			const residentPromises = await Promise.all(residentArray);
			const newCard = {cardType: 1,
												id: 100 + idCounter,
											name: world.name,
											lineOne: world.terrain,
											lineTwo: world.population,
											lineThree: world.climate,
											lineFour: residentPromises,
											favorite: false}
			idCounter++;
			return newCard;
		})
		return Promise.all(worldsArray)
	}

	getVehicles = async () => {
		const fetchVehicles = await fetch('https://swapi.co/api/vehicles/')
		const vehiclesObj = await fetchVehicles.json();
		console.log(vehiclesObj);
		let idCounter = 0;
		const vehiclesArray = vehiclesObj.results.map( async (vehicle) => {
			const newCard = {cardType: 2,
												id: 200 + idCounter,
												name: vehicle.name,
												lineOne: vehicle.name,
												lineTwo: vehicle.model,
												lineThree: vehicle.vehicle_class,
												favorite: false}
			idCounter++;
			return newCard;
			})
		return Promise.all(vehiclesArray)
	}

	componentDidMount = async () => {
		let allChars = await this.getCharacters();
		let allWorlds = await this.getWorlds();
		let allVehicles = await this.getVehicles();
		let allItems = await [...allChars, ...allWorlds, ...allVehicles]

		this.setState({items: allItems})
		this.setState({characters: allChars, worlds: allWorlds, vehicles: allVehicles})
	}
	// handleUpdateState = async (updateType) => {
	// 	let array;
	// 	if (updateType === 'characters') {
	// 		this.setState({containerTitle: 'Characters', loading: true, worlds: [], vehicles: []})
	// 		array = await this.getCharacters();
	// 	} else if (updateType === 'worlds') {
	// 		this.setState({containerTitle: 'Worlds', loading: true, characters: [], vehicles: []})
	// 		array = await this.getWorlds();
	// 	} else if (updateType === 'vehicles') {
	// 		this.setState({containerTitle: 'Vehicles', loading: true, characters: [], worlds: []})
	// 		array = await this.getVehicles();
	// 	}
	// 	this.setState({[updateType]: array, loading: false})
	// }

	favoriteCard = (id) => {
		let getCardIndex = this.state.items.findIndex(item => item.id === id)
		let newState = this.state.items;
		newState[getCardIndex].favorite = !newState[getCardIndex].favorite;
		this.setState({items: newState})
	}

  render() {
    return (
      <div>
		    <Header handleUpdateState={this.handleUpdateState} />
      	<CardContainer containerTitle={this.state.containerTitle}
	      								 favoriteCard={this.favoriteCard}
  								 	 				   active={this.state.active}
															 	items={this.state.items}/>

    		<FilmCrawl />
      </div>
    );
  }
}

export default App;
