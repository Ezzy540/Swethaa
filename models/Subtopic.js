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

const SubtopicSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
      default: "Topic",
    },
    lock: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: "Some Text",
    },
    video: {
      type: [String],
    },
    questions: {
      type: [QuestionSchema]
    },
  },
  { timestamps: true }
);
export default mongoose.model("Subtopic", SubtopicSchema);
