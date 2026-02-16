import Expense from "../models/expenseModel.js";

// ➕ Add Expense
export const addExpense = async (req, res) => {
  try {
    const { title, amount } = req.body;

    const newExpense = await Expense.create({
      title,
      amount
    });

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Error adding expense", error });
  }
};

// 📥 Get All Expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};

// ❌ Delete Expense
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    await Expense.findByIdAndDelete(id);

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  }
};


