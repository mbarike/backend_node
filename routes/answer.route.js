const express = require("express");
const router = express.Router();

const {
  createAnswer,
  getAnswersByQuestion,
  likeAnswer,
  dislikeAnswer,
  addComment,
} = require("../controller/answer.controller");

router.post("/", createAnswer);
router.get("/:questionId", getAnswersByQuestion);

router.put("/like/:id", likeAnswer);
router.put("/dislike/:id", dislikeAnswer);

// ✅ commentaire avec ID dans URL
router.post("/comment/:id", addComment);

module.exports = router;