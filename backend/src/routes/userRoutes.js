import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// Rutas de usuario
router.post("/register", registerUser);

export default router;
 