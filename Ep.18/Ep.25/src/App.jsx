import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Suspense, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Suspense fallback={() => <h1>Loading...</h1> } >
        <Outlet />
      </Suspense>
      {/* * we can render compnenst of broserRouter using Outlet */}
    </>
  );
}

export default App;
