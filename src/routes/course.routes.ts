import { Router } from "express";
import { createCourses } from "../controllers/course.controller";

const router = Router();

router.post("/addCourses", createCourses);

export default router;
