import { Router } from "express";
import userRouter from "./users.js";

const router = Router();

router.get('/users',userRouter)

export default router