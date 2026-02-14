import express from "express";
import cors from "cors";
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🔥");
});

// POST route
app.post("/add-expense", (req, res) => {
  console.log("Received from frontend:");
  console.log(req.body);

  res.json({
    message: "Expense received successfully",
    data: req.body
  });
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

