import mongoose from "mongoose";
const AllquestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      // default: "Question"
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

const DetailSchema = new mongoose.Schema(
  {
    
    SubTopic: {
      type: String,
    //   required: true,
    },
    image: {
      type: [String],
    },
    miniTopics: {
      type: [String],
    },
    questions:{
      type:[AllquestionSchema],
      // required: false,
    }
  },
  { timestamps: true }
);
export default mongoose.model("Detail", DetailSchema);
