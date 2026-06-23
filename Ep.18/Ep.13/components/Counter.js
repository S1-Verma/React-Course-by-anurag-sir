import React, { useState, Fragment } from "react";
import styles from "./Counter.module.css"

const Counter = () => {
  const [count, seCount] = useState(0);
  const [name, setName] = useState("yashwant");
  return (
    <Fragment>
      <h1 className={styles['text-xl']} >{count}</h1>
      <h2>{name}</h2>
      <button
        className={[styles.button, styles['text-xl']].join(' ')} //agar hum do classes dena ho to hume unhe join karna hoga
        onClick={() => {
          seCount((previousState) => previousState + 1); //hum yaha par ek callBack bhi pass kar sakte he

          setName("s1_n____");
        }}
      >
        Increase Count
      </button>
    </Fragment>
  );
};

export default Counter;
