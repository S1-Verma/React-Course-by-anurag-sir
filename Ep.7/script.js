import React, { Children } from "react";
import { createRoot } from "react-dom/client";

function Card({title, imgsrc, price } ) {
 
  return (
    <div className="Card">
      <div className="img">
        <img src={imgsrc} alt="" />
      </div>

      <div className="name">{title}</div>
      <div className="prize">₹{Math.round(price * 80)}</div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => { 
    root.render(<div className="container"> {data.products.map((product) =>{
     return (<Card key={product.id} title = {product.title} imgsrc = {product.images} price={product.price} />)
    })} </div>)

  })
   
    // ab yaha par humne ek element name ki jagah par ek ek funtion ko pass kiya he jo ki Card he ab ye us Card function ko call karega and iski jo bhi props he us funtion me st karke value use render karwayega

    //  *** to yahi react ka component hota he matalb ek aisa react ka element kiska tyepe ek function ho to vahi react ka component hota he

    //   root.render({
    //   $$typeof:  Symbol.for("react.transitional.element"),
    //   type: Card,
    //   key: 1,
    //   ref: null,
    //   props: {
    //     key : 3,
    //     title: 'productImga',
    //     imgsrc: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
    //     price: 444
    //   }
    // });

    // hum ise direct create element se bhi create karnwa sakte he

    // root.render(React.createElement(elementName, props, children)) sysntax of createElement  children is optional

    // root.render(
    //   React.createElement(Card, {
    //     title: "productImga",
    //     imgsrc:
    //       "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
    //     price: 444,
    //   }),
    // );

    // render methud ek react ka object leta he jaise ki humne yaha par pass kiye he
    //react element se matalab he ki aisa object jisme %%typeof property ho

    // ** our ise is tarah se likha jata he
    // root.render(<Card title="chair" imgsrc="https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp" price="444" />)

// console.log(React.createElement(Card, {
//     title: 'productImga',
//     imgsrc: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
//     price: 444})); // ye usi component ko return karega
