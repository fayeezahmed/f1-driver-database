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
        firstWin,
        polePositions,
        championships, 
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
                    <table align="center">
                        <tbody>
                            <tr>
                                <th>Date of Birth</th>
                                <td data-testid="DOB">{dateOfBirth}</td>
                            </tr>
                            <tr>
                                <th>Nationality</th>
                                <td data-testid="NATONALITY">{nationality}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>   
            </div>
            <div 
                className="Stats"
                data-testid="STATS"
            >
                 <h3>
                    Career stats 
                </h3>
                <table className="Stats-Table">
                    <tbody align="left">
                        <tr>
                            <th>Championships</th>
                            <td className="Stats-Table-Middle-row"></td>
                            <td>{championships}</td>
                        </tr>
                        <tr>
                            <th>Race wins</th>
                            <td className="Stats-Table-Middle-row"></td>
                            <td>{racesWon}</td>
                        </tr>
                        <tr>
                            <th>Pole Positions</th>
                            <td className="Stats-Table-Middle-row"></td>
                            <td>{polePositions}</td>
                        </tr>
                        <tr>
                            <th>First Win</th>
                            <td className="Stats-Table-Middle-row"></td>
                            <td>{firstWin.year} {firstWin.race}</td>
                        </tr>
                        <tr>
                            <th>Last Win</th>
                            <td className="Stats-Table-Middle-row"></td>
                            <td>{lastWin.year} {lastWin.race}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchOutput
