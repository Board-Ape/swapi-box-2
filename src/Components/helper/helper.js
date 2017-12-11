const convertToRomanNumeral = (integer) => {
	let numeral;

	if(integer === 1) {numeral = 'I'}
	if(integer === 2) {numeral = 'II'}
	if(integer === 3) {numeral = 'III'}
	if(integer === 4) {numeral = 'IV'}
	if(integer === 5) {numeral = 'V'}
	if(integer === 6) {numeral = 'VI'}
	if(integer === 7) {numeral = 'VII'}

  return numeral
}

const pullOpeningCrawl = (rawData) => {
	let releaseDate = rawData.release_date.split('-')
	const year = releaseDate.shift()
	releaseDate.push(year)

	const lineBreakRegEx = new RegExp(/\s{4,}/, 'g')

	const formattedDate = `${releaseDate[0]} ${releaseDate[1]}, ${releaseDate[2]}`
	const filmTitle = rawData.title.toUpperCase();
	const episodeNo = convertToRomanNumeral(rawData.episode_id);
	const convertLinebreaks = rawData.opening_crawl.replace(lineBreakRegEx, '###');
	const openingCrawl = convertLinebreaks.split('###');

	return { title: filmTitle, date: formattedDate, episode: episodeNo, crawl: openingCrawl };
}

export default pullOpeningCrawl;
