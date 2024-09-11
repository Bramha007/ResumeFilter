import mongoose from "mongoose";
import colors from "colors/safe.js";
import { DB_NAME } from "../constants/index.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      colors.blue.bold(
        `\nMongoDB connected!!! DB HOST: ${connectionInstance.connection.host}`
      )
    );
  } catch (error) {
    console.log(colors.red.bold("ERROR:", error));
    process.exit(1);
  }
};

export default connectDB;
