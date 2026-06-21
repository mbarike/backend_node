const Answer = require("../models/answer.model");

// ➕ ajouter réponse
const createAnswer = async (req, res) => {
  try {
    const { contenu, auteur, questionId } = req.body;

    const answer = await Answer.create({
      contenu,
      auteur,
      questionId,
    });

    res.status(201).json({
      success: true,
      answer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 📥 récupérer réponses d’une question
const getAnswersByQuestion = async (req, res) => {
  try {
    const answers = await Answer.find({
      questionId: req.params.questionId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      answers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAnswer,
  getAnswersByQuestion,
};