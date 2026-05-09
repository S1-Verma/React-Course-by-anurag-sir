import React, { useState, Fragment } from "react";



  console.log(Symbol.for("react.fregment"));
  console.log(Fragment);
  console.log(<></>); //it will return a react object jo ki element nahi hoga but isme hum elements ko render karwa sakte he

  const a = {
    $$typeof: Symbol.for("react.transitional.element"),
    typeof: Symbol.for("react.fregment"),
    key: null,
    props: { 
    },
  }; //this is a fregment 

  console.log(a);

const Counter = () => {
  // ab yaha par jab bhi use stete call hota he vo is pure component ko fir se render karta he


  const states = [0, "yash"]; //ye kuch is tara se record rakhta he
  //ab jab count ki value update hogi to vo 0 ki jaga set ho jayegi
  //and name ki value update hogi to vo name ki jagah set ho jayegi

  const [count, seCount] = useState(0);
  const [name, setName] = useState("yashwant");
  return (
    <Fragment>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          // seCount(count + 1); //agar value same he to vo ek hi bar update karega
          // alert(count) //yaha par ye onclick wala para function execute hene ka bata hi page dobara render hota usse pehele nahi

          // but man lo agar aisa kuch karna he ki jo valeu hum update karna chahte he vo pichhali value par depend karti he to hum kuch is tarah se kar sakte he

          seCount((previousState) => previousState + 1); //hum yaha par ek callBack bhi pass kar sakte he
          seCount((previousState) => previousState + 1);
          seCount((previousState) => previousState + 1);
          setName("s1_n____");
          // ab ye value ko 4 times update kar dega

          // console.log(count); // ab yaha par ye count update nahi hoga
        }}
      >
        Increase Count
      </button>
    </Fragment>
  );
};

export default Counter;
