import express from "express";
import {
  createComptopic,
  deleteComptopic,
  getComptopic,
  getComptopics,
  updateComptopic,
//   updateComptopicAvailability,
} from "../controllers/comptopic.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:userid", verifyAdmin, createComptopic);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateComptopic);
//DELETE
router.delete("/:id/:userid", verifyAdmin, deleteComptopic);
//GET

router.get("/:id", getComptopic);
//GET ALL

router.get("/", getComptopics);

export default router;
