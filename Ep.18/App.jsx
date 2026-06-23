import "./App.css";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { createContext, useEffect, useState } from "react";


export const DataContext = createContext([]);

const App = () => {
  const [countriesData, setCountriesData] = useState([])

  async function fetchData() {
    const results = await Promise.allSettled([
      fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json'),
      fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-flag.json')
    ])

    if (results[0].status === 'rejected') {
      console.error('error to fetching countries data', results[0].reason)
      return [];
    }

    const mainData = await results[0].value.json();

    let flagData = [];
    if (results[1].status === "fulfilled") {
      flagData = await results[1].value.json();
    } else {
      console.warn("Flag API down hai, par hum bina flags ke data dikhayenge.");
    }

    const flegMap = {}
    flagData.forEach((item) => {
      if (item.country) {
        flegMap[item.country.toLowerCase()] = item.flag_base64;
      }
    })

    const finalMergedData = mainData.map((item) => {
      const countryName = item.name.common.toLowerCase();
      const findFlag = flegMap[countryName];
      return {
        ...item,
        flagImg: findFlag || null
      }
    })
    setCountriesData(finalMergedData)

  }


  useEffect(() => {
    if (countriesData.length > 0) {
      setLoading(false)
      return;
    };
    fetchData()
  }, [])


  return (
    // hum yaha se jo bhi value pass karenge vo hume theme childern me mill jayegi
    <ThemeProvider>
      <Header />
      <DataContext.Provider value={[countriesData]}>
        <Outlet />
      </DataContext.Provider>
    </ThemeProvider>
  );
};

export default App;
