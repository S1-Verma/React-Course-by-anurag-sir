import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import expensesData from "./expensesData";

function App() {
  const [expenses, setExpenses] = useState(expensesData)
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
            <Form setExpenses={setExpenses} />
            <Table expenses={expenses} />
        </div>
      </main>
    </>
  );
}

export default App;
