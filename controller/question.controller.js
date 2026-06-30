const Question = require("../models/question.model");

// ✅ Ajouter une question
const createQuestion = async (req, res) => {
try {
const { titre, description, tags } = req.body;


const question = await Question.create({
  titre,
  description,
  tags,
  auteur: req.user._id, // 🔥 user connecté
});

res.status(201).json({
  success: true,
  message: "Question créée avec succès",
  question,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

// ✅ Toutes les questions
const getQuestions = async (req, res) => {
try {
const questions = await Question.find()
.populate("auteur", "nom email") // 🔥 récupère nom
.sort({ createdAt: -1 });


res.status(200).json({
  success: true,
  count: questions.length,
  questions,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

// ✅ Une question
const getQuestionById = async (req, res) => {
try {
const question = await Question.findById(req.params.id)
.populate("auteur", "nom email");


if (!question) {
  return res.status(404).json({
    success: false,
    message: "Question introuvable",
  });
}

res.status(200).json({
  success: true,
  question,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

// ✅ Modifier
const updateQuestion = async (req, res) => {
try {
const question = await Question.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true, runValidators: true }
);


if (!question) {
  return res.status(404).json({
    success: false,
    message: "Question introuvable",
  });
}

res.status(200).json({
  success: true,
  message: "Question modifiée avec succès",
  question,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

// ✅ Supprimer
const deleteQuestion = async (req, res) => {
try {
const question = await Question.findByIdAndDelete(req.params.id);


if (!question) {
  return res.status(404).json({
    success: false,
    message: "Question introuvable",
  });
}

res.status(200).json({
  success: true,
  message: "Question supprimée avec succès",
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

module.exports = {
createQuestion,
getQuestions,
getQuestionById,
updateQuestion,
deleteQuestion,
};
