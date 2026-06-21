const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    contenu: {
      type: String,
      required: true,
    },

    auteur: {
      type: String,
      default: "Anonyme",
    },

    // 🔗 lien avec question
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },

    // 👍 votes
    votes: {
      type: Number,
      default: 0,
    },

    // ⭐ meilleure réponse
    isAccepted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Answer", answerSchema);