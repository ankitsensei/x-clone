import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const app = express();

app.get("/", (req, res) => {
  console.log(res);
  return res.status(200).send("Hello World");
});

app.listen(3000, (req, res) => {
  console.log("Server Started at PORT: 3000");
});
