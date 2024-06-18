const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({
  path: ".env",
});

const connectDB = async () => {
  try {
    console.log(`${process.env.MONGODB_URI}${process.env.DB_NAME}`);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${process.env.DB_NAME}`
    );
    console.log(
      `\nMONGODB Connected !! HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error: " + error);
    process.exit(1);
  }
};

module.exports = connectDB;
