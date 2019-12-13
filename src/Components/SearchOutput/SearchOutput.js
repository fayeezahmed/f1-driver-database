import React, { useState } from 'react';
import './SearchOutput.css';

function SearchOutput( props ) {
    const { dateOfBirth, familyName, givenName, nationality } = props;
    // const [dateOfBirth, setDateOfBirth] = useState(dob);

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
                Profile image 
                <div 
                className="Bio"
                data-testid="BIO"
                >   
                    <ul>
                        <li>
                            Date of Birth: {dateOfBirth}
                        </li>
                        <li>
                            Nationality: {nationality}
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
                <table></table>
            </div>
        </div>
    )
}

export default SearchOutput