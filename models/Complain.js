import mongoose from "mongoose";
const ComplainSchema = new mongoose.Schema(
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
    //   required: true,
    },
    complaintext: {
      type: String,
    //   required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Complain", ComplainSchema);
