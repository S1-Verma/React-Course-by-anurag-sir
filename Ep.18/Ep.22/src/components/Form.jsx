import { useState } from "react";
import Input from "./input";
import Select from "./Select";

const Form = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  const [error, setError] = useState({});

  const validationConfig = {
    title: [
      { required: true, massage: "please enter title" },
      { minlength: 5, massage: "minimum 5 letters required in title" },
    ],
    category: [{ required: true, massage: "please Select a Category" }],
    amount: [{ required: true, massage: "please enter amount" }],
    email: [
      { required: true, massage: "please enter Email address" },
      {
        pattern: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
        massage: "please enter a valid email",
      },
    ],
  };

  const validate = (formData) => {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.massage;
          return true
        }

        if (rule.minlength && value.length < 5) {
          errorData[key] = rule.massage;
          return true
        }

        if (rule.pattern && !rule.pattern.test(value)){
          errorData[key] = rule.massage
          return true
        }
      });
    });
    setError(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    setError({});

    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="expense-form">
        <Input
          nameValue={"title"}
          value={expense.title}
          handleChange={handleChange}
          error={error.title}
        />

        <Select
          nameValue="category"
          Expensevalue={expense.category}
          handleChange={handleChange}
          error={error.category}
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultOption="Select Category"
        />

        <Input
          nameValue={"amount"}
          value={expense.amount}
          handleChange={handleChange}
          error={error.amount}
          inputType="number"
        />
        <Input
          nameValue={"email"}
          value={expense.email}
          handleChange={handleChange}
          error={error.email}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default Form;
