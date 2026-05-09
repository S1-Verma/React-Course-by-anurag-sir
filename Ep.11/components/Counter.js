import React, { useState, Fragment } from "react";


const Counter = ({children}) => {
  const [count, seCount] = useState(0);

  return (
    <Fragment>
      <h1>{count}</h1>
      <button
        onClick={() => {
          seCount((previousState) => previousState + 1); 
        }}
      >
        {children}
      </button>
    </Fragment>
  );
};

export default Counter;
