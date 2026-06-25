const addComment = async (req, res) => {
  const answer = await Answer.findById(req.params.id);

  answer.comments.push({
    contenu: req.body.contenu,
    auteur: req.body.auteur,
  });

  await answer.save();

  res.json(answer);
};