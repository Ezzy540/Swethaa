import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String], // An array of strings to store options
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Question", QuestionSchema);
