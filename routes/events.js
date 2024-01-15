import express from "express";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getEvents,
} from "../controllers/event.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyUser, createEvent);
//UPDATE
router.put("/:id", verifyUser, updateEvent);

//DELETE
router.delete("/:id", verifyUser, deleteEvent);

//GET
router.get("/:id", verifyUser, getEvent);

//GET ALL
router.get("/", verifyUser, getEvents);

export default router;
