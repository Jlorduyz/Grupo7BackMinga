import { Router } from "express";
import {allComments} from "../controllers/comments/read.js";
import {create} from "../controllers/comments/create.js";
import {updateComment} from "../controllers/comments/update.js";
import {deleteComment} from "../controllers/comments/delete.js";
const router = Router();

router.get('/all',allComments)
router.post('/create',create)
router.put('/update/:id',updateComment)
router.delete('/delete/:id',deleteComment)

export default router