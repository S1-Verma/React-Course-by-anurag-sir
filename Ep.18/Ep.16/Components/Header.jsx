import React, { useState, useTransition } from "react";

const Header = ({ theme }) => {
  const [isDark, setIsDark] = theme;

  // if(isDark) {
  //   document.body.classList.add('dark')
  // } else{
  //   document.body.classList.remove('dark')
  // }

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Were in the world? </a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp;{isDark ? "light" : "dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
