import { useState } from "react";

const Form = ({setExpenses}) => {
  const [{ title, category, amount }, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {title, category, amount, id: crypto.randomUUID()} ;
    setExpenses((prevState)=> ([...prevState, expense])) ;

    setFormData({title:'', category:'', amount:''})
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={title}
            onChange={(e) => setFormData((prevState) => ({...prevState, title: e.target.value}) )}
            id="title"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={category}
          onChange={(e) => setFormData((prevState) => ({...prevState, category: e.target.value}) )}
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
            value={amount}
           onChange={(e) => setFormData((prevState) => ({...prevState, amount: e.target.value}) )}
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
