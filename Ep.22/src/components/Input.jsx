import React from "react";

const Input = ({ nameValue, value, handleChange, error, inputType }) => {
  return (
    <>
      <div className="input-container">
        <label htmlFor={nameValue}> {nameValue} </label>
        <input
          name={nameValue}
          value={value}
          onChange={handleChange}
          id={nameValue}
          className="inputField"
          type={inputType}
        />
        <p className="error">{error}</p>
      </div>
    </>
  );
};

export default Input;
