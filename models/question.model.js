const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: [true, "Le titre est obligatoire"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La description est obligatoire"],
    },

   
    tags: [
      {
        type: String,
        required: true,
      },
    ],

    auteur: {
      type: String,
      default: "Anonyme",
    },

   
    votes: {
      type: Number,
      default: 0,
    },

    reponsesCount: {
      type: Number,
      default: 0,
    },

   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);