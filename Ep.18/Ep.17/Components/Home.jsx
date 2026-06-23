import React, { useContext, useEffect } from "react";
import React from "react";
import SearchBar from "./SearchBar";
import CountresList from "./CountresList";
import SelectMenu from "./SelectMenu";
import { useState } from "react";
// import { useOutletContext } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);
  return (
    <main className={`${isDark ? "dark" : "" }`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
        <CountresList query={query} />
    </main>
  );
};

export default Home;
