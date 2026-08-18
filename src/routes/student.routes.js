import registerStudent from "../controllers/student.controller.js";
import { Router } from "express";

const router = Router();
router.post("/register", registerStudent);

export default router;