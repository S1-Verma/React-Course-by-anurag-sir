import React from "./React";
import render from './react-dom'
import "./style.css" ;

function Card({ title, imgsrc, price }) {
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

fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        render(<div className="container"> {data.products.map((product) => {
            return (<Card key={product.id} title={product.title} imgsrc={product.images} price={product.price} />)
        })} </div>, document.querySelector("#root"))
    })