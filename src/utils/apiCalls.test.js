import { getDriversBio, getDriversImageUrl } from './apiCalls';

test('should get an image url with a valid driver', async () => {
    const imgUrl = await getDriversImageUrl('Lewis Hamilton')
    console.log(imgUrl);
})