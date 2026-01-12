const Bmi = require("../models/bmiModel");

// CREATE BMI
const createBmi = async (req, res) => {
  try {
    const { height, weight, bmi, status } = req.body;

    if (!height || !weight || !bmi || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBMI = await Bmi.create({
      height,
      weight,
      bmi,
      status,
    });

    res.status(201).json(newBMI);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL BMI
const getAllBmi = async (req, res) => {
  try {
    const records = await Bmi.find().sort({ createdAt: -1 });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE BMI
const deleteBmi = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Bmi.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBmi, getAllBmi, deleteBmi };
