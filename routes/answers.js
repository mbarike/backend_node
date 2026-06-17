import express from "express";
import Answer from "../models/Answer.js";
import Question from "../models/Question.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// ADD ANSWER
router.post("/questions/:id/answers", auth, async (req, res) => {
  const answer = await Answer.create({
    content: req.body.content,
    author: req.user.id,
    questionId: req.params.id
  });

  await Question.findByIdAndUpdate(req.params.id, {
    $inc: { answersCount: 1 }
  });

  res.json(answer);
});

// GET ANSWERS
router.get("/questions/:id/answers", async (req, res) => {
  const answers = await Answer.find({ questionId: req.params.id })
    .populate("author", "username");

  res.json(answers);
});

export default router;