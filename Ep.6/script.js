import { createRoot } from "react-dom/client";

function card(key, title, imgsrc, price) {
  return (
    <div className="card" key={key}>
      <div className="img">
        <img src={imgsrc} alt="" />
      </div>

      <div className="name">{title}</div>

      <div className="prize">₹{price * 80}</div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {

    const container = data.products.map((product) => {
      return card(product.id, product.title, product.images[0], product.price);
    });

    root.render(<div className="container"> {container} </div>);
    
  });
