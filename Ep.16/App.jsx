import "./App.css";
import { Outlet, Router } from "react-router";
import Header from "./Components/Header";
import { useState } from "react";

const App = () => {
   const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode'))) 
  return (<>         
     <Header theme={[isDark, setIsDark]} />
     <Outlet context={[isDark, setIsDark]} />
  </>)
};

export default App;
