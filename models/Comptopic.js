import mongoose from "mongoose";
const ComptopicSchema = new mongoose.Schema(
  {
    subtopicId: {
      type: String,
      // required: true,
    },
    questionId: {
      type: String,
    },
    savedScore: {
      type: Number,
    },
    vedioPayed: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Comptopic", ComptopicSchema);
