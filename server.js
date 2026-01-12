const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const bmiRoutes = require("./routes/bmiRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
  })
);


// Database Connection
connectDB();

// Routes
app.use("/api/bmi", bmiRoutes);

app.get("/", (req, res) => {
  res.send("BMI Backend is running");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
