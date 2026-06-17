import express from "express";
import Question from "../models/Question.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  const questions = await Question.find().populate("author", "username");
  res.json(questions);
});

// GET ONE
router.get("/:id", async (req, res) => {
  const question = await Question.findById(req.params.id)
    .populate("author", "username");

  res.json(question);
});

// CREATE
router.post("/", auth, async (req, res) => {
  const { title, description, tags } = req.body;

  const question = await Question.create({
    title,
    description,
    tags,
    author: req.user.id
  });

  res.json(question);
});

export default router;