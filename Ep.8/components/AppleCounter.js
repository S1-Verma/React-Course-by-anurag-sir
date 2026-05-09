import leftArrow from "url:../images/left-arrow.png";
import rightArrow from "url:../images/right-arrow.png";
import AppleBascket from "./appleBascket";
import Button from "./Button";
import "./appleCounter.css";

let leftBasketApples = 20;
let rightBasketApples = 0;

const AppleCounter = ({ root }) => {
  const onleftClick = () => {
    if (rightBasketApples > 0) {
      leftBasketApples++;
      rightBasketApples--;
    }
    root.render(<AppleCounter root={root} />);
  };

  const onRightClick = () => {
    if (leftBasketApples > 0) {
      leftBasketApples--;
      rightBasketApples++;
    }
    root.render(<AppleCounter root={root} />);
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
    </div>
  );
};

export default AppleCounter;
