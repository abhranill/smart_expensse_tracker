import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  // 🔥 Fetch expenses from backend
  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  // 🔥 Load expenses when page loads
  useEffect(() => {
    fetchExpenses();
  }, []);

  // 🔥 Add expense
  const addExpense = async () => {
    if (!title || !amount) return;

    try {
      await axios.post("http://localhost:5000/add-expense", {
        title,
        amount
      });

      setTitle("");
      setAmount("");

      fetchExpenses(); // refresh list
    } catch (error) {
      console.error("Error adding expense:", error);
    }
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
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={addExpense} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <h2 style={{ marginTop: "30px" }}>Expenses</h2>

      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.title} - ₹{exp.amount}
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



