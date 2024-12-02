import { Router } from "express";
import { read,readByID } from "../controllers/categories/read.js";
import { create } from "../controllers/categories/create.js";
import { updateCategory } from "../controllers/categories/update.js";
import { removeCategory } from "../controllers/categories/delete.js";
const router = Router();

router.get('/all',read)
router.get('/id/:id',readByID)
router.post('/create',create)
router.put('/update/:id',updateCategory)
router.delete('/delete/:id',removeCategory)

export default router