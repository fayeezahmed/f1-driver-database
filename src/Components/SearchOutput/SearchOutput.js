import React, { useState } from 'react';
import './SearchOutput.css';

function SearchOutput( props ) {
    const { dateOfBirth, familyName, givenName, nationality } = props;
    // const [dateOfBirth, setDateOfBirth] = useState(dob);

    return (
        <div
            className="SearchOutput"
            data-testid="SEARCH_OUTPUT"
        >
            <div 
                className="ProfileImage"
            >
                {/* Profile image goes here */}
            </div>
            <div>
                <ul>
                    <li>
                        Name: {givenName} {familyName}
                    </li>
                    <li>
                        Date of Birth: {dateOfBirth}
                    </li>
                    <li>
                        Nationality: {nationality}
                    </li>
                </ul>
                {/* Stats of image goes here */}
            </div>
        </div>
    )
}

export default SearchOutput