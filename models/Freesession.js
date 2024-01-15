import mongoose from "mongoose";
const FreesessionSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        // required: true,
    },
    mobile:{
        type: Number,
        // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    state: {
      type: String,
      // required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Freesession", FreesessionSchema);
