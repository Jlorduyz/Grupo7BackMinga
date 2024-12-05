import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signOut from "../controllers/auth/signOut.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";

const routerAuth = Router();

routerAuth.post("/signIn", accountNotExist, isValidPassword, generateToken, signIn);
routerAuth.post("/signOut", passport.authenticate("jwt", { session: false }), signOut);


routerAuth.get('/signIn/google',
    passportGoogle.authenticate('google', {session: false,scope: ['profile', 'email']}))

routerAuth.get('/signIn/google/callback',
    passportGoogle.authenticate('google', {session: false, failureRedirect: '/welcomeback'}),generateToken,signInGoogle)


export default routerAuth