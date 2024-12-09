import { Router } from "express";
import {allAuthor} from "../controllers/authors/read.js";
import {create} from "../controllers/authors/create.js";
import {updateAuthor} from "../controllers/authors/update.js";
import {deleteAuthor} from "../controllers/authors/delete.js";
import passport from "../middlewares/passport.js";
const router = Router();

router.get('/all',passport.authenticate("jwt", {session: false}),allAuthor)
router.post('/create',passport.authenticate("jwt", {session: false}),create)
router.put('/update/:id',passport.authenticate("jwt", {session: false}),updateAuthor)
router.delete('/delete/:id',passport.authenticate("jwt", {session: false}),deleteAuthor)


export default router