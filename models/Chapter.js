import mongoose from "mongoose";
const ChapterSchema = new mongoose.Schema(
  {
    chapterName: {
      type: String,
      required: true,
    },
    details: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Chapter", ChapterSchema);
