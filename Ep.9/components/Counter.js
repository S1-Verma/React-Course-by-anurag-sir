import React, { useState } from "react";

const Counter = () => {
  //   const myState = useState(0);

  //   return (
  //     <div>
  //       <h1>{myState}</h1>
  //       <button
  //         onClick={() => {
  //           myState[1](myState[0]+1)
  //         }}
  //       >
  //         Increase Count
  //       </button>
  //     </div>
  //   );

  const [count, seCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          seCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default Counter;
