import express from "express";
import {
  createScore,
  deleteScore,
  getScore,
  getScores,
  updateScore,
//   updateScoreAvailability,
} from "../controllers/score.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:userid", verifyAdmin, createScore);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateScore);
//DELETE
router.delete("/:id/:userid", verifyAdmin, deleteScore);
//GET

router.get("/:id", getScore);
//GET ALL

router.get("/", getScores);

export default router;
