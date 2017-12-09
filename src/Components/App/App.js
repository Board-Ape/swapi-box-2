import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import FilmCrawl from '../FilmCrawl/FilmCrawl.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
	constructor() {
		super();

		this.state = {
			favorites: [],
			containerTitle: 'Select The Force',
			characters: [],
			worlds: [],
			vehicles: [],
			loading: false
		}
	}

	getCharacters = async () => {
		const fetchChars = await fetch('https://swapi.co/api/people/')
		const charsObj = await fetchChars.json();
		console.log(charsObj)
		const charsArray = charsObj.results.map( async (char) => {
			const fetchHomeworld = await fetch(char.homeworld);
			const homeworld = await fetchHomeworld.json();
			const fetchSpecies = await fetch(char.species[0]);
			const species = await fetchSpecies.json();
			return {name: char.name,
							homeworld: homeworld.name,
							species: species.name,
							homePop: homeworld.population}
		})
		return Promise.all(charsArray)
	}

	getWorlds = async () => {
		const fetchWorlds = await fetch('https://swapi.co/api/planets/')
		const worldsObj = await fetchWorlds.json();
		console.log(worldsObj)
		const worldsArray = worldsObj.results.map( async (world) => {
			const residentArray = await world.residents.map( async (resident) => {
				const newResident = await fetch(resident);
				const cleanResident = await newResident.json();
				const nameToAdd = cleanResident.name;
				return nameToAdd;
			});
			const residentPromises = await Promise.all(residentArray);
			return {name: world.name,
							terrain: world.terrain,
							population: world.population,
							climate: world.climate,
							residents: residentPromises}
		})
		return Promise.all(worldsArray)
	}

	getVehicles = async () => {
		const fetchVehicles = await fetch('https://swapi.co/api/vehicles/')
		const vehiclesObj = await fetchVehicles.json();
		console.log(vehiclesObj);
		const vehiclesArray = vehiclesObj.results.map( async (vehicle) => {
			return {name: vehicle.name,
							model: vehicle.model,
							vClass: vehicle.vehicle_class,
							passengers: vehicle.passengers}
		})
		return Promise.all(vehiclesArray)
	}

	handleUpdateState = async (updateType) => {
		let array;
		if (updateType === 'characters') {
			this.setState({containerTitle: 'Characters', loading: true, worlds: [], vehicles: []})
			array = await this.getCharacters();
		} else if (updateType === 'worlds') {
			this.setState({containerTitle: 'Worlds', loading: true, characters: [], vehicles: []})
			array = await this.getWorlds();
		} else if (updateType === 'vehicles') {
			this.setState({containerTitle: 'Vehicles', loading: true, characters: [], worlds: []})
			array = await this.getVehicles();
		}
		this.setState({[updateType]: array, loading: false})
	}

	favoriteCard = (cardObj) => {
		console.log('hi')
		console.log(cardObj)
	}

  render() {
    return (
      <div>
		    <Header handleUpdateState={this.handleUpdateState}
        								favorites={this.state.favorites}
      									getWorlds={this.getWorlds}
      								getVehicles={this.getVehicles} />

      	<CardContainer containerTitle={this.state.containerTitle}
      								 		 characters={this.state.characters}
		      								 		 worlds={this.state.worlds}
	      								 		 vehicles={this.state.vehicles}
	      								 		favorites={this.state.favorites}
  								 	 favoriteCardFunc={this.favoriteCard} />

    		<FilmCrawl />
      </div>
    );
  }
}

export default App;
