import { Router } from "express";
import {allReaction} from "../controllers/reactions/read.js";
import {create} from "../controllers/reactions/create.js";
import {updateReaction} from "../controllers/reactions/update.js";
import {deleteReaction} from "../controllers/reactions/delete.js";
const router = Router();

router.get('/all',allReaction)
router.post('/create',create)
router.put('/update/:id',updateReaction)
router.delete('/delete/:id',deleteReaction)

export default router