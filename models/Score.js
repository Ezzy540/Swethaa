import mongoose from "mongoose";
const ScoreSchema = new mongoose.Schema(
    {
      detailId: {
        type: String,
        // required: true,
      },
      score: {
        type: Number,
      }
    },
    { timestamps: true }
  );
  export default mongoose.model("Score", ScoreSchema);
