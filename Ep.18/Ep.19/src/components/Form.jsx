const Form = ({setExpenses}) => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {...getFormData(e.target), id: crypto.randomUUID()}
    setExpenses((prevExppeses) =>  [...prevExppeses, expense ])
  };



  const getFormData = (form) => {
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value; //daha par humne data object me key and value define ki he
    }
    return data;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input name="title" id="title" required />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
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
          <input name="amount" id="amount" type="number" required />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default Form;
