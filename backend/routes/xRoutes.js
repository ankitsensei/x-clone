import express from "express";
import { xModel } from "../models/xModel.js";

const router = express.Router();

// Get all post from Database;
router.get("/", async (req, res) => {
  try {
    const posts = await xModel.find({});
    return res.status(200).json({
      count: posts.length,
      data: posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

export default router;
