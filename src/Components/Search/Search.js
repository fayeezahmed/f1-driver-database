import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchOutput from '../SearchOutput/SearchOutput';
import findKey from '../../utils/findKey';
//https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState();
    const [dob, setDob] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [givenName, setGivenName] = useState("");
    const [nationality, setNationality] = useState("");
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = async (e) => {
        // call api
        // To grab an image 
        // http://techslides.com/grab-wikipedia-pictures-by-api-with-php

        // Driver information
        //// http://ergast.com/api/f1/drivers/michael_schumacher.json

        // Stats for titles won:
        //// http://ergast.com/api/f1/drivers/Michael_Schumacher/driverStandings.json

        e.preventDefault();

        // Get driver name:
        const getDriverName = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=prefixsearch&pssearch=${searchTerm}&prop=images&imlimit=25&format=json&origin=*`,
            { mode : 'cors' }).catch((error) => {
                console.log("error", error)
            })
            
        const driverName = await getDriverName.json().then((res) => {
                return res.query.prefixsearch[0].title;
            })
        

        // Profile image
        const driverImages = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&titles=${driverName}&prop=images&imlimit=25&format=json&origin=*`,
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

        setImageUrl(imageUrl);

        // Ergast API
        let parsedSearchTerm;

        if (searchTerm === 'Michael Schumacher' || searchTerm === 'Max Verstappen') {
            console.log('true!')
            parsedSearchTerm = searchTerm.split(' ').join('_')
            
        }
        else {
            parsedSearchTerm = searchTerm.split(' ')[1]
        }
    
        console.log(parsedSearchTerm)
        const result = await fetch('http://ergast.com/api/f1/drivers/' + parsedSearchTerm + '.json')
        await result.json()
            .then((res)=>{
                if (res.MRData && res.MRData.total == 1) {
                    setData(res)
                    setDob(res.MRData.DriverTable.Drivers[0].dateOfBirth)
                    setFamilyName(res.MRData.DriverTable.Drivers[0].familyName)
                    setGivenName(res.MRData.DriverTable.Drivers[0].givenName)
                    setNationality(res.MRData.DriverTable.Drivers[0].nationality)
                }
            })
    }

    useEffect(() => {
        if (data) {
            console.log(data.MRData.DriverTable.Drivers[0])
            
        }
    }, [data])

    return ( 
        <div 
            className="Search"
            data-testid="SEARCH"    
        >
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Search driver.."
                    className="SearchInput"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    data-testid="SEARCH_INPUT"
                />
                    
                <input 
                    type="submit"
                    value="Submit" 
                    data-testid="SUBMIT_BUTTON"
                />
            </form>
            { data ? <SearchOutput 
                        dateOfBirth={dob} 
                        familyName={familyName} 
                        givenName={givenName}
                        nationality={nationality}
                        imageUrl={imageUrl}
                    /> : null }
        </div>
    )
}

export default Search;