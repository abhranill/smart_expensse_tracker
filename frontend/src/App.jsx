import axios from "axios";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = async () => {
  if (!title || !amount) return;

  try {
    await axios.post("http://localhost:5000/add-expense", {
      title,
      amount,
    });

    const newExpense = { title, amount };
    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  } catch (error) {
    console.error("Error adding expense:", error);
  }
};

  const deleteExpense = (indexToDelete) => {
  const updatedExpenses = expenses.filter(
    (_, index) => index !== indexToDelete
  );
  setExpenses(updatedExpenses);
};

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>💰 Smart Expense Tracker</h1>

      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={addExpense} style={{ padding: "8px 15px" }}>
        Add
      </button>

      <h2 style={{ marginTop: "40px" }}>Expenses</h2>

      <ul>
  {expenses.map((exp, index) => (
    <li key={index}>
      {exp.title} - ₹{exp.amount}
      <button onClick={() => deleteExpense(index)}>
        ❌
      </button>
    </li>
  ))}
   </ul>

      <h3>
  Total: ₹
  {expenses.reduce((total, exp) => total + Number(exp.amount), 0)}
</h3>

    </div>
  );
}

export default App;


