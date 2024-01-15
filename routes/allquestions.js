import express from "express";
import {
  createAllquestion,
  deleteAllquestion,
  getAllquestion,
  getAllquestions,
  updateAllquestion,
//   updateAllquestionAvailability,
} from "../controllers/allquestion.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:detailid", verifyAdmin, createAllquestion);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id/:detailid", verifyAdmin, updateAllquestion);
//DELETE
router.delete("/:questionid/:detailid", verifyAdmin, deleteAllquestion);
//GET

router.get("/:id", getAllquestion);
//GET ALL

router.get("/", getAllquestions);

export default router;
