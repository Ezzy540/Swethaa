import mongoose from "mongoose";
const DataSchema = new mongoose.Schema(
  {
    grade:{
        type: Number,
        required: true,
    },
    subject: {
      type: String,
      // required: true,
    //   unique: true,
    },
    chapterCount:{
        type: Number,
        required: true,
    },
    chapterdetails:{
        type: [String],
    }
  },
  { timestamps: true }
);

export default mongoose.model("Data", DataSchema);
