import express from "express";
import {
  createChapter,
  deleteChapter,
  getChapter,
  getChapters,
  updateChapter,
//   updateChapterAvailability,
} from "../controllers/chapter.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:dataid", verifyAdmin, createChapter);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateChapter);
//DELETE
router.delete("/:dataid/:id", verifyAdmin, deleteChapter);
//GET

router.get("/:id", getChapter);
//GET ALL

router.get("/", getChapters);

export default router;
