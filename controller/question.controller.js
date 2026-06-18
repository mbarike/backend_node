const Question = require('../models/Question');

exports.createQuestion = async (req, res) => {
  const { title, description, tags } = req.body;

  const question = await Question.create({
    title,
    description,
    tags,
    user: req.user.id
  });

  res.json(question);
};

exports.getQuestions = async (req, res) => {
  const questions = await Question.find()
    .populate('user', 'username')
    .sort({ createdAt: -1 });

  res.json(questions);
};

exports.getOneQuestion = async (req, res) => {
  const question = await Question.findById(req.params.id)
    .populate('user', 'username');

  res.json(question);
};