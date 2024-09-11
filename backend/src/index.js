import dotenv from "dotenv";
import connectDB from "./db/index.js";
import colors from "colors/safe.js";
import app from "./app.js";

dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.on("error", (error) => {
      console.log(colors.red.bold("ERROR:", error));
      throw error;
    });
    app.listen(port, () => {
      console.log(colors.blue.underline("Server is running on PORT:", port));
    });
  })
  .catch((error) =>
    console.log(colors.red.bold("MONGO DB connection failed !!!", error))
  );
