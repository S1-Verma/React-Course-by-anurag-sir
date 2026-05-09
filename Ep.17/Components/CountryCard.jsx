import React  from 'react';
import { Link } from 'react-router';

const CountryCard = ({countryid, flag, countryName, population, region, capital, data}) => {
    return (
        <Link className='country-card' to={`/${countryName}`} state={data} >
            {/* basically Link tage me hum state se data ko kisi dusre page par pass kar sakte he  our useState se kahi bhi accept kar sakte he */}
            <div className="imgbox">
            <img src={flag.svg} alt={flag.alt}/>
            </div>
            <div className="card-text">
                <h3 className="card-title">{countryName}</h3>
                <p id='1'><b>Population: </b>{population}</p>
                <p id='2'><b>Region: </b>{region}</p>
                <p id='3'><b>Capital: </b>{capital}</p>
            </div>            
        </Link>
    );
}

export default CountryCard;
