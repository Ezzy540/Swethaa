import express from "express";
import { login, tlogin ,alogin,clogin, register, logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/tlogin", tlogin)
router.post("/alogin", alogin)
router.post("/clogin", clogin)

export default router