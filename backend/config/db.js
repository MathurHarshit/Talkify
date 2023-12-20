import mongoose from "mongoose";
import "dotenv/config";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

export default connectDB;
