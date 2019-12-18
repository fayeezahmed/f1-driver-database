import findKey from './findKey';

async function getDriversImageUrl(searchTerm) {
    // Get driver's image from wikipedia

    // Get driver name:
    const getDriverName = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=prefixsearch&pssearch=${searchTerm}&prop=images&imlimit=5&format=json&origin=*`,
        { mode : 'cors' }).catch((error) => {
            console.log("error", error)
        })
        
    const driverName = await getDriverName.json().then((res) => {
            return res.query.prefixsearch[0].title;
        })

    // Profile image
    const driverImages = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&titles=${driverName}&prop=images&imlimit=5&format=json&origin=*`,
        { mode : 'cors' }).catch((error) => {
            console.log("error", error)
        });

    const imageName = await driverImages.json().then((res) => {
        const image = findKey(res, "images")
        if(image && image[0] && image[0][0]) {
            return image[0][0].title
        }
        else {
            return ""
        }
    })

    const driverImage = await fetch(
        `http://en.wikipedia.org/w/api.php?action=query&titles=${imageName}&prop=imageinfo&iiprop=url&format=json&origin=*`,
        { mode: 'cors'}
    )
    
    const imageUrl = await driverImage.json().then((res) => {
        const url = findKey(res, "url")
        return url[0]
    })

    return imageUrl;
}

async function getDriversBio(searchTerm) {
    let parsedSearchTerm;

    if (searchTerm === 'Michael Schumacher' || searchTerm === 'Max Verstappen') {
        parsedSearchTerm = searchTerm.split(' ').join('_')
        
    }
    else {
        parsedSearchTerm = searchTerm.split(' ')[1]
    }

    const result = await fetch('http://ergast.com/api/f1/drivers/' + parsedSearchTerm + '.json')
    
    return result;
}

export {
    getDriversImageUrl,
    getDriversBio
}