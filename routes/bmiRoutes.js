const express = require("express");
const router = express.Router();

const {
  createBmi,
  getAllBmi,
  deleteBmi,
} = require("../controllers/bmi-controller");

// Routes
router.get("/", getAllBmi);
router.post("/", createBmi);
router.delete("/:id", deleteBmi);

module.exports = router;
