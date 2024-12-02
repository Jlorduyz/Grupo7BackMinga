import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signOut from "../controllers/auth/signOut.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";

const routerAuth = Router();

routerAuth.post("/signIn", accountNotExist, isValidPassword,generateToken, signIn);
routerAuth.post("/signOut", passport.authenticate("jwt", {session: false}), signOut);


export default routerAuth