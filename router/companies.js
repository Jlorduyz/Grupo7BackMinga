import { Router } from "express";
import { register } from "../controllers/companies/register.js";
import { updateCompany } from "../controllers/companies/update.js";
import { readAllCompanies, companyByID } from "../controllers/companies/read.js";
import { deleteCompany } from "../controllers/companies/delete.js";
import passport from "../middlewares/passport.js";
const router = Router();


router.get('/all',passport.authenticate("jwt", {session: false}),readAllCompanies)
router.get('/id/:id',passport.authenticate("jwt", {session: false}),companyByID)
router.post('/register',passport.authenticate("jwt", {session: false}),register)
router.put('/update/:id',passport.authenticate("jwt", {session: false}),updateCompany)
router.delete('/delete/:id',passport.authenticate("jwt", {session: false}),deleteCompany)

export default router