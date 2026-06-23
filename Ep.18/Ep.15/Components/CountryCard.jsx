import React from 'react';

const CountryCard = ({countryid, flag, countryName, populaton, region, capital}) => {
    return (
        <a className='country-card' href='/country.html?name=Barbados' >
            <div className="imgbox">
            <img src={flag.svg} alt={flag.alt}/>
            </div>
            <div className="card-text">
                <h3 className="card-title">{countryName}</h3>
                <p id='1'><b>Population: </b>{populaton}</p>
                <p id='2'><b>Region: </b>{region}</p>
                <p id='3'><b>Capital: </b>{capital}</p>
            </div>
            
        </a>
    );
}

export default CountryCard;
