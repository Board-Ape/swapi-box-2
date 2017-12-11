export const getCharacters = async () => {
	return await ['Luke', 'Leia', 'Chewbacca']
}

export const getWorlds = async () => {
	return await ['Hoth', 'Naboo']
}

export const getVehicles = async () => {
	return await ['X-Wing', 'Tie Fighter']
}

export const getFilmCrawl = async () => {
	return await {title: "A New Hope", date: "May 15, 1977", episode: "VII", crawl: ["It is a...", "Rebel spaceships...", "have won..."] }
}
