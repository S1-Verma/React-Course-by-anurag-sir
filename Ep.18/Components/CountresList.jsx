import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Shimmer from "./Shimmer";
import { usefilter } from "./Hooks/useFilter";
import { data } from "react-router";

export default function CountresList() {
  const [loading, setLoading] = useState(true); // Loading state
  const { query, setQuery } = usefilter();
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.restcountries.com/countries/v5?limit=100',
      { headers: { 'Authorization': 'Bearer rc_live_1044cb3266ed46278b1e9aad92b514c1' } }
    )
      .then(function (response) { return response.json(); })
      .then(function ({ data }) {
        console.log(data.objects);
        setCountriesData(data.objects)
        setLoading(false)
      });

  }, []);

  if (loading) {
    return <Shimmer />;
  }

  const cardArr = countriesData?.filter((country) =>
    country?.names?.common.toLowerCase().includes(query.toLowerCase()) ||
      country?.region?.toLowerCase().includes(query.toLowerCase())
  )
    .map((country) => {
      const country_Name = country.names.common;
      const country_flag = country.flag;
      const countryPopulation = country.population.toLocaleString("en-IN");
      const region = country.region;
      const capital = country.capital;
      
      return (
        <CountryCard
          key={country_Name}
          countryName={country_Name}
          flag={country_flag}
          countryPopulation={countryPopulation}
          region={region}
          capital={capital}
          data={country}
        />
      );
    });

  return <div className="countries-container">{cardArr}</div>;
}
