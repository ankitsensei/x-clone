import express from "express";
import { xModel } from "../models/xModel.js";
import multer from "multer";

const router = express.Router();

// Configure multer to store files in memory as buffer.
const storage = multer.memoryStorage();

const upload = multer({ storage });

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

// Get one post from Database;
router.get("/details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await xModel.findById(id);
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// Post a post in db
router.post("/", upload.single("media"), async (req, res) => {
  try {
    if (!req.body.text) {
      return res.status(400).send({
        message: "Send all required fields",
      });
    }
    // Store file as base64
    const photoBase64 = req.file ? req.file.buffer.toString("base64") : null;

    const newPost = {
      text: req.body.text,
      media: photoBase64,
    };
    console.log(newPost);
    const posts = await xModel.create(newPost);
    return res.status(201).send(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Update a post in db
router.put("/edit/:id", upload.single("media"), async (req, res) => {
  try {
    if (!req.body.text) {
      return res.status(400).send({
        message: "Send all required fields",
      });
    }
    // Store file as base64
    const photoBase64 = req.file
      ? req.file.buffer.toString("base64")
      : req.body.existingImages;
    const updatedData = {
      text: req.body.text,
      media: photoBase64,
    };
    if (photoBase64) {
      updatedData.photo = photoBase64;
    }

    const { id } = req.params;
    const result = await xModel.findByIdAndUpdate(id, updatedData);

    if (!result) {
      return res.status(404).send({ message: "Post not found" });
    } else {
      return res.status(200).send({ message: "Post updated successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// Delete a post in db
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await xModel.findByIdAndDelete(id, req.body);

    if (!result) {
      return res.status(404).send({ message: "Post not found" });
    } else {
      return res.status(200).send({ message: "Post deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});

export default router;
