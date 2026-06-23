import leftArrow from "url:../images/left-arrow.png";
import rightArrow from "url:../images/right-arrow.png";
import AppleBascket from "./appleBascket";
import Button from "./Button";
import "./appleCounter.css";
import Counter from "./Counter";
import { useState } from "react";

const AppleCounter = () => {

  return (
    <div className="main-cerontain">
      <Counter> Basket </Counter> 
      { /*   yahi hota he childer prop iske bich me me joxt lika use hum prop ki tarah except karte user kar sakte he  */}
    </div>
  );
};

export default AppleCounter;
