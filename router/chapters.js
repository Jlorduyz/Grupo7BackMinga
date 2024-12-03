import { Router } from "express";
import { read,readByID } from "../controllers/chapters/read.js";
import { create } from "../controllers/chapters/create.js";
import { updateChapter } from "../controllers/chapters/update.js";
import { remove } from "../controllers/chapters/delete.js";
import passport from "../middlewares/passport.js";
const router = Router();

router.get('/all',passport.authenticate("jwt", {session: false}),read)
router.get('/id/:id',passport.authenticate("jwt", {session: false}),readByID)
router.post('/create',passport.authenticate("jwt", {session: false}),create)
router.put('/update/:id',passport.authenticate("jwt", {session: false}),updateChapter)
router.delete('/delete/:id',passport.authenticate("jwt", {session: false}),remove)

export default router