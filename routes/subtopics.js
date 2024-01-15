import express from "express";
import {
  createSubtopic,
  deleteSubtopic,
  getSubtopic,
  getSubtopics,
  updateSubtopic,
//   updateSubtopicAvailability,
} from "../controllers/subtopic.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:detailid", verifyAdmin, createSubtopic);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateSubtopic);
//DELETE
router.delete("/:id/:detailid", verifyAdmin, deleteSubtopic);
//GET

router.get("/:id", getSubtopic);
//GET ALL

router.get("/", getSubtopics);

export default router;
