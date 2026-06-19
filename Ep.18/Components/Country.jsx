import React, { useEffect, useState } from "react";
import "./country.css";
import { data, Link, useLocation, useParams } from "react-router";
import { useTheme } from "./Hooks/useTheme";

const Country = () => {
  const param = useParams();
  const { state } = useLocation();

  const countryName = param.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useTheme();

  useEffect(() => {
    async function fetchCountry() {
      // Demo key: no account required.
      const response = await fetch(
        `https://api.restcountries.com/countries/v5/names.common/${countryName}`,
        { headers: { 'Authorization': 'Bearer rc_live_1044cb3266ed46278b1e9aad92b514c1' } }
      );
      const data = await response.json();
      console.log(data.data.objects[0])
      UpdateCountryData(data.data.objects[0])
      console.log(data)
      setLoading(false)
    }
    fetchCountry();
  }, [])

  function UpdateCountryData(data) {
    setCountryData({
      flag: data?.flag.url_svg,
      name: data.names?.common,
      nativeName: Object.values(data.names.nativeName || {})[0]?.common,
      population: data.population?.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion || "",
      capital: data.capitals[0]?.name,
      tld: data.tld || "",
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages[0] || {}).join(", "),
      borders: data.borders,
    });

    if (!data.borders) {
      data.borders = [];
    }
  };

  return (
    <div className={`countryContainer ${isDark ? "dark" : ""}`}>
      {notFound && (
        <div className="errorBox">
          <div className="large">Page Not Found </div> <br />
          <b> Something Went Wrongh ?</b>
        </div>
      )
        ||
        loading && (
          <div className="errorBox">
            <div className="large">
              {" "}
              <span className="left"></span> <span className="right"></span>{" "}
            </div>
          </div>
        ) || <main>

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
              <div className="imgBox">
                <img src={countryData.flag || null} alt="flag_image" />
              </div>

              <div className="details-text-container">
                <h1>{countryData.name}</h1>
                <br />
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
                    <b>Top Level Domain: { }</b>
                    <span className="top-level-domain">{countryData.tld}</span>
                  </p>
                  <p>
                    <b>Currencies: { }</b>
                    <span className="currencies">{countryData.currencies}</span>
                  </p>
                  <p>
                    <b>Languages: { }</b>
                    <span className="languages">{countryData.languages}</span>
                  </p>
                </div>

                {countryData.borders.length !== 0 && (
                  <div className="border-countries">
                    <b>Border Countries: </b>&nbsp;
                    <span className="borderCountries">
                      {countryData.borders.map((border) => {
                        return (
                          <div key={border}>
                            {border}
                          </div>
                        );
                      })}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>}
    </div>
  )
};

export default Country;
