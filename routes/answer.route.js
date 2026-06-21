const express = require("express");
const router = express.Router();

const {
  createAnswer,
  getAnswersByQuestion,
} = require("../controller/answer.controller");

// ajouter réponse
router.post("/", createAnswer);

// récupérer réponses d’une question
router.get("/:questionId", getAnswersByQuestion);

module.exports = router;