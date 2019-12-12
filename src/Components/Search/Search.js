import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchOutput from '../SearchOutput/SearchOutput';
//https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState();
    const [dob, setDob] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [givenName, setGivenName] = useState("");
    const [nationality, setNationality] = useState("");

    const handleSubmit = async (e) => {
        // call api
        // To grab an image 
        // http://techslides.com/grab-wikipedia-pictures-by-api-with-php

        // Driver information
        //// http://ergast.com/api/f1/drivers/michael_schumacher.json

        // Stats for titles won:
        //// http://ergast.com/api/f1/drivers/Michael_Schumacher/driverStandings.json

        e.preventDefault();
        const result = await fetch('http://ergast.com/api/f1/drivers/' + searchTerm.split(' ')[1] + '.json')
        await result.json().then((res)=>{
            if (res.MRData && res.MRData.total == 1) {
                setData(res)
                setDob(res.MRData.DriverTable.Drivers[0].dateOfBirth)
                setFamilyName(res.MRData.DriverTable.Drivers[0].familyName)
                setGivenName(res.MRData.DriverTable.Drivers[0].givenName)
                setNationality(res.MRData.DriverTable.Drivers[0].nationality)
            }
        });
        
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
                    /> : null }
        </div>
    )
}

export default Search;