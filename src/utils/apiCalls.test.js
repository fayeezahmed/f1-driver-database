/**
 * @jest-environment node
 */

import { 
    getDriversBio, 
    getDriversImageUrl,
    getRaceWins,
} from './apiCalls';

test('should get an image url with a valid driver', async () => {
    const imgUrl = await getDriversImageUrl('Fernando Alonso')
    expect(imgUrl).toEqual('https://upload.wikimedia.org/wikipedia/commons/6/67/2017_British_Grand_Prix_%2835127471353%29.jpg')
})

test.only('should throw an error when the driver name cannot be found', async () => {
    const imgUrl = await getDriversImageUrl('Fnado Aonso')
    expect(imgUrl).toEqual(null)
})

test('should return race wins if driver has them', async () => {
    const raceWins = await getRaceWins('Fernando Alonso')
    expect(raceWins.lastWin.year).toEqual("2013")
})
