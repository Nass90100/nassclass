require("dotenv").config();

const mongoose = require("mongoose");

console.log(process.env.MONGO_URI);

const conDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = conDb;
