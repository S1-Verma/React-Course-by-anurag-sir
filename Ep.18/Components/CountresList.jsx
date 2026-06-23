import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Shimmer from "./Shimmer";
import { usefilter } from "./Hooks/useFilter";
import { data } from "react-router";
import { useData } from "./Hooks/useData";

export default function CountresList() {
  const { query, setQuery } = usefilter();
  const [countriesData] = useData();

  if (countriesData.length === 0) {
    return <Shimmer />;
  }

  const cardArr = countriesData?.filter((country) =>
    country?.name.common.toLowerCase().includes(query.toLowerCase()) ||
    country?.region?.toLowerCase().includes(query.toLowerCase())
  )
    .map((country) => {
      const country_Name = country.name.common;
      const country_flag = country.flagImg
      const area = country.area;
      const region = country.region;
      const capital = country.capital;

      return (
        <CountryCard
          key={country_Name}
          countryName={country_Name}
          flag={country_flag}
          area={area}
          region={region}
          capital={capital}
          data={country}
        />
      );
    });

  return <div className="countries-container">{cardArr}</div>;

}