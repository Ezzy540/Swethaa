import express from "express";
import {
  createComplain,
  deleteComplain,
  getComplain,
  getComplains,
  updateComplain,
} from "../controllers/complain.js";
import Complain from "../models/Complain.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

// CREATE
router.post("/", createComplain);

//UPDATE
router.put("/:id", updateComplain);
//DELETE
router.delete("/:id", deleteComplain);
//GET

router.get("/find/:id", getComplain);
//GET ALL

router.get("/", getComplains);

export default router;
