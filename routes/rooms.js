import express from "express";
import {
  createRoom,
  getRooms
} from "../controllers/room.js";
import { verifyTeacher } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/create-room", verifyTeacher, createRoom);

// //UPDATE
// // router.put("/availability/:id", updateRoomAvailability);
// router.put("/:id", verifyAdmin, updateQuestion);
// //DELETE
// router.delete("/:id/:subtopicid", verifyAdmin, deleteQuestion);
// //GET

// router.get("/:id", getQuestion);
// //GET ALL

router.get("/", getRooms);

export default router;
