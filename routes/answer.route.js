const express = require("express");
const router = express.Router();

const {
  createAnswer,
  getAnswersByQuestion,
  likeAnswer,
  dislikeAnswer,
  addComment,
} = require("../controller/answer.controller");

// ➕ ajouter réponse
router.post("/", createAnswer);

// 📥 réponses par question
router.get("/:questionId", getAnswersByQuestion);

// 👍 like
router.put("/like/:id", likeAnswer);

// 👎 dislike
router.put("/dislike/:id", dislikeAnswer);

// 💬 commentaire
router.post("/comment", addComment);

module.exports = router;