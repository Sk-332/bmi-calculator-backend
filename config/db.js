const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected successfully to:", conn.connection.name);
  } catch (error) {
    console.error("Mongodb connection Failed:", error.message);
    process.exit(2);
  }
};


module.exports = connectDB;