const addComment = async (req, res) => {
  try {
    const { answerId, auteur, contenu } = req.body;

    const answer = await Answer.findById(answerId);

    answer.comments.push({ auteur, contenu });

    await answer.save();

    res.json({
      success: true,
      message: "Commentaire ajouté",
      answer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};