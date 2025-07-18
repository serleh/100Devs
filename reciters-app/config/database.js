const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING);
    console.log(`Connected to Database`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
