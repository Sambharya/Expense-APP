const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const connectDb = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Set `strictQuery` option to suppress warning
    mongoose.set('strictQuery', false);

    console.log(`MongoDB Connected: ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error(`${error}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb;
