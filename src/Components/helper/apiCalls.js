import pullOpeningCrawl from './helper.js';

export const getCharacters = async () => {
	const fetchChars = await fetch('https://swapi.co/api/people/')
	const charsObj = await fetchChars.json();
	let idCounter = 0;
	const charsArray = charsObj.results.map( async (char) => {
		const fetchHomeworld = await fetch(char.homeworld);
		const homeworld = await fetchHomeworld.json();
		const fetchSpecies = await fetch(char.species[0]);
		const species = await fetchSpecies.json();
		const newCard = {cardType: 0,
										 id: 0 + idCounter,
										 name: char.name.toUpperCase(),
										 lineOne: homeworld.name,
										 lineTwo: species.name,
										 lineThree: homeworld.population,
										 favorite: false}
		idCounter++;
		return newCard;
	})
	return Promise.all(charsArray)
}

export const getWorlds = async () => {
	const fetchWorlds = await fetch('https://swapi.co/api/planets/')
	const worldsObj = await fetchWorlds.json();
	let idCounter = 0;
	const worldsArray = worldsObj.results.map( async (world) => {
		const residentArray = await world.residents.map( async (resident) => {
			const newResident = await fetch(resident);
			const cleanResident = await newResident.json();
			const nameToAdd = cleanResident.name;
			return nameToAdd;
		});
		const residentPromises = await Promise.all(residentArray);
		const newCard =  {cardType: 1,
											id: 100 + idCounter,
											name: world.name.toUpperCase(),
											lineOne: world.terrain,
											lineTwo: world.population,
											lineThree: world.climate,
											lineFour: residentPromises.join(', '),
											favorite: false}
		idCounter++
		return newCard;
	})
	return Promise.all(worldsArray)
}

export const getVehicles = async () => {
	const fetchVehicles = await fetch('https://swapi.co/api/vehicles/')
	const vehiclesObj = await fetchVehicles.json();
	let idCounter = 0;
	const vehiclesArray = vehiclesObj.results.map( async (vehicle) => {
		const newCard = {cardType: 2,
										 id: 200 + idCounter,
										 name: vehicle.name.toUpperCase(),
										 lineOne: vehicle.model,
						         lineTwo: vehicle.vehicle_class,
						         lineThree: vehicle.passengers,
						         favorite: false}
	idCounter++
	return newCard;
	})
	return Promise.all(vehiclesArray)
}

export const getFilmCrawl = async () => {
	let randomFilm = Math.ceil(Math.random() * 7)
	let rawFilmCrawl = await fetch(`https://swapi.co/api/films/${randomFilm}/`)
	let jsonFilmCrawl = await rawFilmCrawl.json();
	let filmCrawl = await pullOpeningCrawl(jsonFilmCrawl);

	return filmCrawl
}
