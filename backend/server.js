import express from "express";
import cors from "cors";

const app = express();
let expenses = [];
// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🔥");
});

// POST route
app.post("/add-expense", (req, res) => {
  const { title, amount } = req.body;

  const newExpense = { title, amount };

  expenses.push(newExpense);

  console.log("Stored in backend:", expenses);

  res.json({ message: "Expense added successfully" });
});
app.get("/expenses", (req, res) => {
  res.json(expenses);
});


// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

