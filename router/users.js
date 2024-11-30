import { Router } from "express";  
import { register } from "../controllers/users/register.js";
import {updateUser}  from "../controllers/users/update.js";
import { allUsers, userByID } from "../controllers/users/read.js";
import { deleteUser } from "../controllers/users/delete.js";
const router = Router();

router.get('/all',allUsers)
router.get('/id/:id',userByID)
router.post('/register',register)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

export default router