const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const bmiRoutes = require("./routes/bmiRoutes");

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "BMI Backend is running" });
});

app.use("/api/bmi", bmiRoutes);

// DB connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
