import { use, useEffect, useRef, useState } from "react";

const Form = ({ setExpenses }) => {
  const [{ title, category, amount }, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const myRef = useRef(0);
  // ye basical ek box ki tarah he jo ki values ko store karta he jisme agar hum values ko updata karte he to vo update to ho jati he but page ko doubara render nahi karti
  //  jais agar useState use karte he to value update hone par vah page ko rerender karta he but useRef aisa nahi karta and ye bina page ko render kiye values ko update karta he

  //  yani ki ye value ko update to karta he but use render nahi karta
  // console.log(myRef);
  // const form = useRef(null);

  //  ** besically hum useRef ko dom ka refrence lene ke liye use karte he

  // useEffect(() => {
  //   console.log(myRef);
  //   // ab yaha par button access ho jayega
  //   myRef.current.style.backgroundColor = "red";
  //   form.current.style.backgroundColor = "red";
  //   //ab ye form ka background color change kar dega
  // });

  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const amountRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
      id: crypto.randomUUID(),
    };

    setExpenses((prevState) => [...prevState, expense]);
    setFormData({ title: "", category: "", amount: "" });
  };

  return (
    <>
       <form onSubmit={handleSubmit} className="expense-form" >
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            // value={title}
            // onChange={(e) =>
            //   setFormData((prevState) => ({
            //     ...prevState,
            //     title: e.target.value,
            //   }))
            // }

            ref={titleRef}
            id="title"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            // value={category}
            // onChange={(e) =>
            //   setFormData((prevState) => ({
            //     ...prevState,
            //     category: e.target.value,
            //   }))
            // }
            ref={categoryRef}
            id="category"
          >
            <option hidden>Select Category</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            // value={amount}
            // onChange={(e) =>
            //   setFormData((prevState) => ({
            //     ...prevState,
            //     amount: e.target.value,
            //   }))
            // }
            ref={amountRef}
            id="amount"
            type="number"
            required
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default Form;
