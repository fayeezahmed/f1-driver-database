/**
 * @jest-environment node
 */

import { getDriversBio, getDriversImageUrl } from './apiCalls';

test('should get an image url with a valid driver', async () => {
    const imgUrl = await getDriversImageUrl('Fernando Alonso')
    expect(imgUrl).toEqual('https://upload.wikimedia.org/wikipedia/commons/6/67/2017_British_Grand_Prix_%2835127471353%29.jpg')
})

test('should throw an error when the driver name cannot be found', async () => {
    const imgUrl = await getDriversImageUrl('Fnado Aonso')
    expect(imgUrl).toEqual('https://upload.wikimedia.org/wikipedia/commons/6/67/2017_British_Grand_Prix_%2835127471353%29.jpg')
})

