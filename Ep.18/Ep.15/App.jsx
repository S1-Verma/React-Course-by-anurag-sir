import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import './App.css'
import SelectMenu from "./Components/SelectMenu";
import CountresList from "./Components/CountresList";
import { useState } from "react";



const App = () => {
  const [query , setQuery] = useState('') ;
  return (<>
      <Header />
      <div className="search-filter-container">
      <SearchBar setQuery={setQuery} />
      <SelectMenu />
      </div>
      <CountresList query={query} />
       
  </>) ;
};

export default App;
