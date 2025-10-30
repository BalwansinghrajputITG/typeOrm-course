
import { Router } from "express";
import {
  createUser,
  listUsers,
  getUsersById,
} from "../controllers/user.controller";


const router = Router();

router.post("/createUser", createUser);
router.get("/", listUsers);
router.post("/upadateUseById", getUsersById);

export default router;
