import { Router } from "express";
import { create } from "../controllers/mangas/create.js";
import { updateManga } from "../controllers/mangas/update.js";
import { allMangas, mangasByID } from "../controllers/mangas/read.js";
import { deleteManga } from "../controllers/mangas/delete.js";
import passport from "../middlewares/passport.js";
const router = Router();

router.get('/all',allMangas)
router.get('/id/:id',passport.authenticate("jwt", {session: false}),mangasByID)
router.post('/create',passport.authenticate("jwt", {session: false}),create)
router.put('/update/:id',passport.authenticate("jwt", {session: false}),updateManga)
router.delete('/delete/:id',passport.authenticate("jwt", {session: false}),deleteManga)

export default router