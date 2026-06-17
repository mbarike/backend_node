import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  votes: { type: Number, default: 0 },
  answersCount: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Question", questionSchema);