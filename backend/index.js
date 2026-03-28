import express from "express";
import mongoose from "mongoose";
import xRoutes from "./routes/xRoutes.js";

import { configDotenv } from "dotenv";
configDotenv();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;


app.use("/", xRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to Database");
    app.listen(PORT, () => console.log(`App is running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
