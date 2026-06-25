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

    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 récupérer réponses d’une question
const getAnswersByQuestion = async (req, res) => {
  try {
    const answers = await Answer.find({
      questionId: req.params.questionId,
    }).sort({ createdAt: -1 });

    res.status(200).json(answers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👍 like
const likeAnswer = async (req, res) => {
  try {
    const answer = await Answer.findById(req.params.id);

    answer.likes++;
    await answer.save();

    res.json(answer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👎 dislike
const dislikeAnswer = async (req, res) => {
  try {
    const answer = await Answer.findById(req.params.id);

    answer.dislikes++;
    await answer.save();

    res.json(answer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 💬 ajouter commentaire (CORRIGÉ)
const addComment = async (req, res) => {
  try {
    const { contenu, auteur } = req.body;

    const answer = await Answer.findById(req.params.id);

    if (!answer) {
      return res.status(404).json({ message: "Réponse introuvable" });
    }

    answer.comments.push({
      contenu,
      auteur,
    });

    await answer.save();

    res.json(answer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAnswer,
  getAnswersByQuestion,
  likeAnswer,
  dislikeAnswer,
  addComment,
};