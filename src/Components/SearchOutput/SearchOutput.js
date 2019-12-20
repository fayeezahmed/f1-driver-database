import React  from 'react';
import './SearchOutput.css';

function SearchOutput( props ) {
    const { 
        dateOfBirth,
        familyName, 
        givenName, 
        nationality, 
        imageUrl,
        racesWon,
        lastWin,
        firstWin
    } = props;

    return (
        <div
            className="SearchOutput FlexContainer"
            data-testid="SEARCH_OUTPUT"
        >
            <div 
                className="Profile"
                data-testid="PROFILE"
            >
                <h3>
                 {givenName} {familyName}
                </h3>
                <div >
                    <img className="ProfileImage" src={imageUrl} alt="driver profile" />
                </div>
                <div 
                className="Bio"
                data-testid="BIO"
                >   
                    <ul>
                        <li>
                            Date of Birth: <span data-testid="DOB"> {dateOfBirth} </span>
                        </li>
                        <li>
                            Nationality: <span data-testid="NATIONALITY">{nationality}</span>
                        </li>
                    </ul>
                </div>   
            </div>
            <div 
                className="Stats"
                data-testid="STATS"
            >
                 <h3>
                    Stats below 
                </h3>
                <ul>
                    <li>
                        Race wins: {racesWon}
                    </li>
                    <li>
                        First win: {firstWin.year} {firstWin.race}
                    </li>
                    <li>
                        Last win: {lastWin.year} {lastWin.race}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SearchOutput
