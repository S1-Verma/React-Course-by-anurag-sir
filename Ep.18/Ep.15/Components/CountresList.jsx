import React, { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountresList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  // yaha par api bar bar call ho rahi he kyu ki useState 2 bar render hota he ek to tab hota he jai initail value set hoti he and ekbar tab hota he api se data aata he

  // ** jab api se data ata he to ye rerender hota he our jab re-render hota he to contriesData me empty array [] set ho jata our fetch doubar call hota he to ye process infinite time tak chalti he to ise rokne ke liye humne if statement lagai he

  // ab ye par agar hum countries ko khali karna chahte ho vo khali nahi hogi kyu ki jaise hi countiesData ki length 0 hogi ye fir se api ko call kar dega

  // if(countriesData.length === 0){
  //   fetch(" https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,population,flags")
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setCountriesData(data)
  //         console.log(countriesData);
  //       });
  //   }

  // to isi se bachne ke liye hum useEffect ka use karte he
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      " https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,population,flags",
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        console.log(countriesData);
      });
      
        function clear () {
          // ye function tab call hota he jab hu kisi component ko unmount karwate he yani page se remove karte he 
          console.log('cleaning page .....'); 
          // ye use useEffect ke sath hota he 
      }
  }, [count,countriesData]); // ue dependency array he agar isme kuch values he to jab bhi un values me changes hoga tab ye useEffect call hoga

  // jaise  man lo
  // to  jab  bhi hum count ki value ko chnage karence useEffect chalega

  useEffect(()=>{
    console.log('count increased ...');
  }, [count])

  // ab ye code sirf ek hi bar chalega

  const cardArr = countriesData
    .filter((country) => country.name.common.toLowerCase().includes(query))
    .map((country) => {
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

  return (
    <>
      <button
        onClick={() => {
          setCountriesData([]);
        }}
      >     Remove All Countries
      </button>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increaseCount
        </button>
      <div className="countries-container">{cardArr}</div>
    </>
  );
}
