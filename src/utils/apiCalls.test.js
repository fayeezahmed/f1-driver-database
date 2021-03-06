/**
 * @jest-environment node
 */

import { 
    getDriversBio, 
    getDriversImageUrl,
    getRaceWins,
    getPolePositions,
    getChampionshipsWon,
} from './apiCalls';

test('should get an image url with a valid driver', async () => {
    const imgUrl = await getDriversImageUrl('Fernando Alonso')
    expect(imgUrl).toEqual('https://upload.wikimedia.org/wikipedia/commons/6/67/2017_British_Grand_Prix_%2835127471353%29.jpg')
})

test('should throw an error when the driver name cannot be found', async () => {
    const imgUrl = await getDriversImageUrl('Fnado Aonso')
    expect(imgUrl).toEqual(null)
})

test('should return race wins if driver has them', async () => {
    const raceWins = await getRaceWins('Fernando Alonso')
    expect(raceWins.lastWin.year).toEqual("2013")
    expect(raceWins.lastWin.race).toEqual("Spanish Grand Prix")
    expect(raceWins.firstWin.year).toEqual("2003")
    expect(raceWins.firstWin.race).toEqual("Hungarian Grand Prix")
    expect(raceWins.numberOfWins).toEqual(32)
})

test('should return null race wins if driver has not won any', async () => {
    const raceWins = await getRaceWins('Jos Verstappen')
    expect(raceWins.lastWin.year).toEqual(null)
    expect(raceWins.lastWin.race).toEqual(null)
    expect(raceWins.firstWin.year).toEqual(null)
    expect(raceWins.firstWin.race).toEqual(null)
    expect(raceWins.numberOfWins).toEqual(0)
})

test('should return number of pole positions if driver has them', async () => {
    const numOfPoles = await getPolePositions('Fernando Alonso')
    expect(numOfPoles).toEqual(23)
})

test('should return 0 if driver has no pole positions', async () => {
    const numOfPoles = await getPolePositions('Jos Verstappen')
    expect(numOfPoles).toEqual(0)
})

test('should return number of championships if driver has won any', async () => {
    const numOfChampionships = await getChampionshipsWon('Fernando Alonso')
    expect(numOfChampionships).toEqual(2)
})

test('should return 0 if driver has not won any championships', async () => {
    const numOfChampionships = await getChampionshipsWon('Jos Verstappen')
    expect(numOfChampionships).toEqual(0)
})
