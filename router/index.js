import { Router } from "express";
import userRouter from "./users.js";
import companyRouter from "./companies.js";
import mangaRouter from "./mangas.js";
import ChapterRouter from "./chapters.js";
import CategoriesRouter from "./categories.js";
import routerAuth from "./auth.js";
import ReactionRouter from "./reactions.js";
import AutorRouter from "./authors.js";

const router = Router();

router.use('/users',userRouter)
router.use('/companies',companyRouter)
router.use('/authors',AutorRouter)
router.use('/mangas',mangaRouter)
router.use('/chapters',ChapterRouter)
router.use('/categories',CategoriesRouter)
router.use('/reactions',ReactionRouter)
router.use('/auth',routerAuth)

export default router