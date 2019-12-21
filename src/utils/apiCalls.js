import findKey from './findKey';
const fetch = require("node-fetch");

async function getDriversImageUrl(searchTerm) {
    // Get driver's image from wikipedia

    // Get driver name:
    const getDriverName = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=prefixsearch&pssearch=${searchTerm}&prop=images&imlimit=5&format=json&origin=*`,
        { mode : 'cors' }).catch((error) => {
            console.log("Cannot get driver's name! ", error)
        })
    const driverName = await getDriverName.json().then((res) => {
            if(res.query.prefixsearch.length > 0) {
                return res.query.prefixsearch[0].title;
            } else {
                return null;
            }
        })
    if (driverName === null) {
        return null;
    }
    // Profile image
    const driverImages = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&titles=${driverName}&prop=images&imlimit=5&format=json&origin=*`,
        { mode : 'cors' }).catch((error) => {
            console.log("Error: cannot fetch driver's images! ", error)
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
    ).catch((error) => {
        console.log("Cannot find driver image! ", error)
    })
    
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
        const splitSearchTerm = searchTerm.split(' ')
        parsedSearchTerm = splitSearchTerm[splitSearchTerm.length -1]
    }

    const result = await fetch('http://ergast.com/api/f1/drivers/' + parsedSearchTerm + '.json')
    
    return result;
}

async function getRaceWins(searchTerm) {
    // Get driver's race results - this needs to be parsed for number of wins and podiums:
    //// https://ergast.com/api/f1/drivers/alonso/results.json
  
    const parsedSearchTerm = prepareNameForAPI(searchTerm)
    const allRaceResults = await fetch(`https://ergast.com/api/f1/drivers/${parsedSearchTerm}/results.json?limit=1000`) 
    const races = allRaceResults.json()
        .then((res) => {
            if(res && res.MRData && res.MRData.RaceTable && res.MRData.RaceTable.Races) {
                const racesWon = res.MRData.RaceTable.Races.filter((f) =>{
                    //     console.log(parseInt(f.Results[0].position), parseInt(f.Results[0].position) === 1)
                        if (parseInt(f.Results[0].position) === 1) {
                            return parseInt(f.Results[0].position)
                        }
                        else {
                            return null;
                        }
                })
                if (racesWon.length > 0) {
                    return {
                        lastWin: {
                            year: racesWon[racesWon.length-1].season,
                            race: racesWon[racesWon.length-1].raceName
                        },
                        firstWin: {
                            year: racesWon[0].season,
                            race: racesWon[0].raceName,
                        },
                        numberOfWins: racesWon.length
                    }
                } else {
                    return null
                }
            }
        })

        return races
}

async function getDriversStats(searchTerm) {
    
    // Get driver's pole position count - parse pos 1:
    //// https://ergast.com/api/f1/drivers/alonso/qualifying.json

    // Get driver's championship results - this needs to be parsed for number of titles:
    //// https://ergast.com/api/f1/drivers/alonso/driverStandings/1/seasons.json
}

function prepareNameForAPI(searchTerm) {
    let parsedSearchTerm;

    if (searchTerm === 'Michael Schumacher' || searchTerm === 'Max Verstappen') {
        parsedSearchTerm = searchTerm.split(' ').join('_')
        
    }
    else {
        const splitSearchTerm = searchTerm.split(' ')
        parsedSearchTerm = splitSearchTerm[splitSearchTerm.length -1]
    }

    return parsedSearchTerm
}

export {
    getDriversImageUrl,
    getDriversBio,
    getDriversStats,
    getRaceWins,
}
