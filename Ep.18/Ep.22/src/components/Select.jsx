import React from "react";

const Select = ({
  nameValue,
  Expensevalue,
  handleChange,
  error,
  options,
  defaultOption,
}) => {
  return (
    <div className="input-container">
      <label htmlFor="category">Category</label>
      <select
        name={nameValue}
        value={Expensevalue}
        onChange={handleChange}
        id={nameValue}
        className="inputField"
      >
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default Select;
