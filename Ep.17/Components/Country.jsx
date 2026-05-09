import React, { useContext, useEffect, useState } from "react";
import "./country.css";
import { Link, useLocation, useOutletContext, useParams } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

const Country = () => {
  const param = useParams();
  const { state } = useLocation();
  const [isDark] = useContext(ThemeContext);

  const countryName = param.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  function UpdateCountryData(data) {
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital.join(", "),
      tld: data.tld,
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages).join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      }),
    ).then((borders) => {
      setTimeout(() => {
        setCountryData((prevState) => ({ ...prevState, borders }));
      });
    });
  }

  useEffect(() => {
    if (state) {
      UpdateCountryData(state);
      setLoading(false);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setNotFound(false);
        setLoading(false);
        UpdateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  // if country not found he  to error ki jaga  he show karo

  if (notFound) {
    return (
      <div className="errorBox">
        <div className="large">Page Not Found </div> <br />
        <b> Something Went Wrongh ?</b>
      </div>
    );
  }

  return loading ? (
    <div className="errorBox">
      <div className="large">
        {" "}
        <span className="left"></span> <span className="right"></span>{" "}
      </div>
    </div>
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt="flag image" />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: {countryData.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: {}</b>
                <span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: {}</b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: {}</b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>

            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                <span className="borderCountries">
                  {countryData.borders.map((border) => {
                    return (
                      <Link key={border} to={`/${border}`}>
                        {border}
                      </Link>
                    );
                  })}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Country;
