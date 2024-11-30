import { Router } from "express";
import { register } from "../controllers/companies/register.js";
import { updateCompany } from "../controllers/companies/update.js";
import { readAllCompanies, companyByID } from "../controllers/companies/read.js";
import { deleteCompany } from "../controllers/companies/delete.js";
const router = Router();


router.get('/all',readAllCompanies)
router.get('/id/:id',companyByID)
router.post('/register',register)
router.put('/update/:id',updateCompany)
router.delete('/delete/:id',deleteCompany)

export default router