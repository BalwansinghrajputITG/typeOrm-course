import { Router } from "express";
import { createUserBio } from "../controllers/bio.controller";
const router = Router();

router.post("/addBio", createUserBio);

export default router;
