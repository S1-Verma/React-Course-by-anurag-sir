import React from "react";
import "./country.css";
import { Link, useParams } from "react-router";
import { useTheme } from "./Hooks/useTheme";
import { useData } from "./Hooks/useData";

const Country = () => {
  const [countriesData] = useData();
  const param = useParams();
  const [isDark] = useTheme();
  const countryName = param.country;


  const filtered = countriesData?.find(
    (country) => country.name.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!countriesData || countriesData.length === 0) {
    return (
      <div className="errorBox">
        <div className="large">Loading Country Data...</div>
      </div>
    );
  }

  if (!filtered) {
    return (
      <div className="errorBox">
        <div className="large">Page Not Found </div> <br />
        <b> Something Went Wrong?</b>
      </div>
    );
  }

  const currenciesText = filtered.currencies
    ? Object.values(filtered.currencies).map((c) => c.name).join(", ")
    : "N/A";

  const languagesText = filtered.languages
    ? Object.values(filtered.languages).join(", ")
    : "N/A";

  return (
    <div className={`countryContainer ${isDark ? "dark" : ""}`}>
      <main>
        <div className="country-details-container">
          <span
            className="back-button"
            onClick={() => {
              window.history.back();
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>

          <div className="country-details">
            <div className="imgBox">
              <img src={filtered.flagImg || null} alt="flag_image" />
            </div>

            <div className="details-text-container">
              <h1>{filtered.name.common}</h1>
              <br />
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">
                    {filtered.name.nativeName
                      ? Object.values(filtered.name.nativeName)[0]?.common
                      : filtered.name.common}
                  </span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{filtered.population?.toLocaleString("en-IN") || ''}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{filtered.region || ''}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">{filtered.subregion || ""}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{filtered.capital?.[0] || ''}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain">{filtered.tld?.[0] || ''}</span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{currenciesText}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">{languagesText}</span>
                </p>
              </div>

              {filtered.borders && filtered.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  <span className="borderCountries">
                    {filtered.borders.map((borderCode) => {
                      const borderCountry = countriesData?.find((c) => c.cca3 === borderCode);
                      const borderCountryName = borderCountry ? borderCountry.name.common : borderCode;
                      return (
                        <Link key={borderCode} to={`/${borderCountryName}`}>
                          {borderCountryName}
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
    </div>
  );
};

export default Country;