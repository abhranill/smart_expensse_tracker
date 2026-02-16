import mongoose from "mongoose";

// Define Schema (structure of document)
const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

// Create Model
const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
