import express from "express";
import {
  createQuestion,
  deleteQuestion,
  getQuestion,
  getQuestions,
  updateQuestion,
//   updateQuestionAvailability,
} from "../controllers/question.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:subtopicid", verifyAdmin, createQuestion);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id/:subtopicid", verifyAdmin, updateQuestion);
//DELETE
router.delete("/:id/:subtopicid", verifyAdmin, deleteQuestion);
//GET

router.get("/:id", getQuestion);
//GET ALL

router.get("/", getQuestions);

export default router;
