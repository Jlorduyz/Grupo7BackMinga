import { Router } from "express";
import {allComments} from "../controllers/comments/read.js";
import {create} from "../controllers/comments/create.js";
import {updateComment} from "../controllers/comments/update.js";
import {deleteComment} from "../controllers/comments/delete.js";
import passport from "../middlewares/passport.js";
const router = Router();

router.get('/all',allComments)
router.post('/create',passport.authenticate("jwt", {session: false}),create)
router.put('/update/:id',passport.authenticate("jwt", {session: false}),updateComment)
router.delete('/delete/:id',passport.authenticate("jwt", {session: false}),deleteComment)

export default router