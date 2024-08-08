import express from "express"; // for server
import mongoose from "mongoose"; // for database
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
