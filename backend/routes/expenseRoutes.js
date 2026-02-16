import express from "express";

const router = express.Router();

let expenses = [];

// GET
router.get("/expenses", (req, res) => {
  res.json(expenses);
});

// POST
router.post("/add-expense", (req, res) => {
  const { title, amount } = req.body;

  const newExpense = { title, amount };
  expenses.push(newExpense);

  res.json({ message: "Expense added successfully" });
});

// DELETE
router.delete("/delete-expense/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (index >= 0 && index < expenses.length) {
    expenses.splice(index, 1);
    res.json({ message: "Deleted successfully" });
  } else {
    res.status(400).json({ message: "Invalid index" });
  }
});

export default router;

