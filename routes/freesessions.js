import express from "express";
import {
  createFreesession,
  deleteFreesession,
  getFreesession,
  getFreesessions,
  updateFreesession,
} from "../controllers/freesession.js";
import Freesession from "../models/Freesession.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

// CREATE
router.post("/", createFreesession);

//UPDATE
router.put("/:id", updateFreesession);
//DELETE
router.delete("/:id", deleteFreesession);
//GET

router.get("/find/:id", getFreesession);
//GET ALL

router.get("/", getFreesessions);

export default router;
