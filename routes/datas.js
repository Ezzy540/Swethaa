import express from "express";
import {
  createData,
  deleteData,
  getData,
  getDatas,
  updateData,
} from "../controllers/data.js";
import Data from "../models/Data.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createData);

//UPDATE
router.put("/:id", verifyAdmin, updateData);
//DELETE
router.delete("/:id", verifyAdmin, deleteData);
//GET

router.get("/find/:id", getData);
//GET ALL

router.get("/", getDatas);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

export default router;
