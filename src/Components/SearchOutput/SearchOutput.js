import React, { useState } from 'react';
import './SearchOutput.css';

function SearchOutput( props ) {
    const { dateOfBirth, familyName, givenName, nationality, imageUrl } = props;

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
                    <img className="ProfileImage" src={imageUrl} alt="driver image" />
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
                <table></table>
            </div>
        </div>
    )
}

export default SearchOutput