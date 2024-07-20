const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const connectDb = async () => {
  try {
    // Remove unsupported options
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Set `strictQuery` option if you want to prepare for Mongoose 7.x
    mongoose.set('strictQuery', false);

    console.log(`MongoDB Connected: ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error(`${error}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb;
