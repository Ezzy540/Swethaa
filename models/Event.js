import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
    default: "title",
},
  meetinglink: {
    type: String,
    // required: true,
    default: "https://meet.google.com/amc-ekhz-yxp",
},
  start: Date,
  end: Date,
});

export default mongoose.model("Event", eventSchema);
