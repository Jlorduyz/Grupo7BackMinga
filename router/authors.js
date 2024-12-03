import { Router } from "express";
import {allAuthor} from "../controllers/authors/read.js";
import {create} from "../controllers/authors/create.js";
import {updateAuthor} from "../controllers/authors/update.js";
import {deleteAuthor} from "../controllers/authors/delete.js";
const router = Router();

router.get('/all',allAuthor)
router.post('/create',create)
router.put('/update/:id',updateAuthor)
router.delete('/delete/:id',deleteAuthor)

export default router