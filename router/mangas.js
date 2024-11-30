import { Router } from "express";
import { create } from "../controllers/mangas/create.js";
import { updateManga } from "../controllers/mangas/update.js";
import { allMangas, mangasByID } from "../controllers/mangas/read.js";
import { deleteManga } from "../controllers/mangas/delete.js";
const router = Router();

router.get('/all',allMangas)
router.get('/id/:id',mangasByID)
router.post('/create',create)
router.put('/update/:id',updateManga)
router.delete('/delete/:id',deleteManga)

export default router