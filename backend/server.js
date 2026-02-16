import express from "express";
import cors from "cors";
import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🔥");
});

// Use routes
app.use("/", expenseRoutes);

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
