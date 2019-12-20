import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchOutput from '../SearchOutput/SearchOutput';
import { 
   getDriversBio,
   getDriversImageUrl,
   getDriversStats, 
} from '../../utils/apiCalls';


function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState();
    const [dob, setDob] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [givenName, setGivenName] = useState("");
    const [nationality, setNationality] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [racesWon, setRacesWon] = useState("")
    const [lastWin, setLastWin] = useState("")
    const [firstWin, setFirstWin] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const raceResults = await getDriversStats(searchTerm);
        if (raceResults) {
            setRacesWon(raceResults.numberOfWins)
            setLastWin(raceResults.lastWin)
            setFirstWin(raceResults.firstWin)
        }
        const result = await getDriversBio(searchTerm);
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
        
        const imageUrl = await getDriversImageUrl(searchTerm);
        
        setImageUrl(imageUrl);
    }

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
                    value="Search" 
                    data-testid="SUBMIT_BUTTON"
                />
            </form>
            { data ? <SearchOutput 
                        dateOfBirth={dob} 
                        familyName={familyName} 
                        givenName={givenName}
                        nationality={nationality}
                        imageUrl={imageUrl}
                        racesWon={racesWon}
                        lastWin={lastWin}
                        firstWin={firstWin}
                    /> : null }
        </div>
    )
}

export default Search;
