import React, { useState } from "react";
import countriesData from "../countriesData/";
import CountryCard from "./CountryCard";


export default function CountresList({query}) {
  
  const cardArr = countriesData.filter(country => country.name.common.toLowerCase().includes(query)).map((country) => {
    const country_Name = country.name.common;
    const country_flag = country.flags;
    const populaton = country.population.toLocaleString("en-IN");
    const region = country.region;
    const capital = country.capital;
    return (
      <CountryCard
        key={country_Name}
        countryName={country_Name}
        flag={country_flag}
        populaton={populaton}
        region={region}
        capital={capital}
      />
    );
  });

  return <div className="countries-container">{cardArr}</div>;
}


