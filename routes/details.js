import express from "express";
import {
  createDetail,
  deleteDetail,
  getDetail,
  getDetails,
  updateDetail,
//   updateDetailAvailability,
} from "../controllers/detail.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:chapterid", verifyAdmin, createDetail);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateDetail);
//DELETE
router.delete("/:chapterid/:id", verifyAdmin, deleteDetail);
//GET

router.get("/:id", getDetail);
//GET ALL

router.get("/", getDetails);

export default router;
