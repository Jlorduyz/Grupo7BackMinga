import { Router } from "express";
import userRouter from "./users.js";
import companyRouter from "./companies.js";
import mangaRouter from "./mangas.js";
import ChapterRouter from "./chapters.js";
import CategoriesRouter from "./categories.js";

const router = Router();

router.use('/users',userRouter)
router.use('/companies',companyRouter)
router.use('/mangas',mangaRouter)
router.use('/chapters',ChapterRouter)
router.use('/categories',CategoriesRouter)

export default router