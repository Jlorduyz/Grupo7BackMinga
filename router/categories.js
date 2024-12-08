import { Router } from "express";
import { read,readByID } from "../controllers/categories/read.js";
import { create } from "../controllers/categories/create.js";
import { updateCategory } from "../controllers/categories/update.js";
import { removeCategory } from "../controllers/categories/delete.js";
import passport from "../middlewares/passport.js";
const router = Router();

router.get('/all',read)
router.get('/id/:id',passport.authenticate("jwt", {session: false}),readByID)
router.post('/create',passport.authenticate("jwt", {session: false}),create)
router.put('/update/:id',passport.authenticate("jwt", {session: false}),updateCategory)
router.delete('/delete/:id',passport.authenticate("jwt", {session: false}),removeCategory)

export default router