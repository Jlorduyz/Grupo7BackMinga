import { Router } from "express";
import { read,readByID } from "../controllers/chapters/read.js";
import { create } from "../controllers/chapters/create.js";
import { updateChapter } from "../controllers/chapters/update.js";
import { remove } from "../controllers/chapters/delete.js";
const router = Router();

router.get('/all',read)
router.get('/id/:id',readByID)
router.post('/create',create)
router.put('/update/:id',updateChapter)
router.delete('/delete/:id',remove)

export default router