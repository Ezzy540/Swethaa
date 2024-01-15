import mongoose from "mongoose";
// import Comptopic from "./Comptopic";
// import Comptopic from "../models/Comptopic.js";
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
    },
  },
  { timestamps: true }
);
const ScoreSchema = new mongoose.Schema(
  {
    detailId: {
      type: String,
      // required: true,
    },
    score: {
      type: Number,
    },
  },
  { timestamps: true }
);
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
      default: "0",
    },
    section: {
      type: String,
      required: true,
      default: "A",
    },
    password: {
      type: String,
      required: true,
    },
    isStudent: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isTeacher: {
      type: Boolean,
      default: false,
    },
    isCounsellor: {
      type: Boolean,
      default: false,
    },
    comptopics: {
      type: [ComptopicSchema],
    },
    scores: {
      type: [ScoreSchema],
    },
    teacherSection: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
