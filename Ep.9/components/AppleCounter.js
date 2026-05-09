import leftArrow from "url:../images/left-arrow.png";
import rightArrow from "url:../images/right-arrow.png";
import AppleBascket from "./appleBascket";
import Button from "./Button";
import "./appleCounter.css";
import Counter from "./Counter";
import { useState } from "react";

const AppleCounter = () => {

  const [leftBasketApples, setLeftBasketApples] = useState(0);
  const [rightBasketApples, setRightBasketApples] = useState(10);
  
  const onleftClick = () => {
    if (rightBasketApples > 0) {
      setLeftBasketApples(leftBasketApples + 1);
      setRightBasketApples(rightBasketApples-1)
    }
  };

  const onRightClick = () => {
    if (leftBasketApples > 0) {
      setRightBasketApples(rightBasketApples + 1);
      setLeftBasketApples(leftBasketApples - 1);
    }
  };

  return (
    <div className="main-cerontain">
      <h1>APPLE COUNTER</h1>
      <section className="container">
        <div className="left">
          <AppleBascket
            basketName="Left Basket"
            applesCount={leftBasketApples}
          />
          <Button
            onClickFuntion={onleftClick}
            title="Click and Shift Apple to Left Basket"
            cName="leftBtn"
            imgUrl={leftArrow}
          />
        </div>

        <div className="right">
          <Button
            onClickFuntion={onRightClick}
            title="click and Shift Apple to Right Basket"
            cName="rightBtn"
            imgUrl={rightArrow}
          />
          <AppleBascket
            basketName="Right Basket"
            applesCount={rightBasketApples}
          />
        </div>
      </section>
      <Counter />
    </div>
  );
};

export default AppleCounter;
