import { Router } from "express";  
import { register } from "../controllers/users/register.js";
import {updateUser}  from "../controllers/users/update.js";
import { allUsers, userByID } from "../controllers/users/read.js";
import { deleteUser } from "../controllers/users/delete.js";
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";

const router = Router();

router.get('/all',passport.authenticate("jwt", {session: false}),allUsers)
router.get('/id/:id',passport.authenticate("jwt", {session: false}),userByID)
router.post('/register',accountExist,createHash,register)
router.put('/update/:id',passport.authenticate("jwt", {session: false}),updateUser)
router.delete('/delete/:id',passport.authenticate("jwt", {session: false}),deleteUser)

export default router