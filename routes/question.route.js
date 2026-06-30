const express = require("express");
const router = express.Router();

const {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("../controller/question.controller");

const userMiddleware = require("../middlewares/user.middleware");

// 🔥 sécurisé (user connecté obligatoire)
router.post("/", userMiddleware, createQuestion);
router.put("/:id", userMiddleware, updateQuestion);
router.delete("/:id", userMiddleware, deleteQuestion);

// public
router.get("/", getQuestions);
router.get("/:id", getQuestionById);

module.exports = router;