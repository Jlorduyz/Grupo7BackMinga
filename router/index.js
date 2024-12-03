import { Router } from "express";
import userRouter from "./users.js";
import companyRouter from "./companies.js";
import mangaRouter from "./mangas.js";

const router = Router();

router.use('/users',userRouter)
router.use('/companies',companyRouter)
router.use('/mangas',mangaRouter)
router.use('/mangas',mangaRouter)
router.use('/mangas',mangaRouter)


export default router