import User from "../models/User.js"
import Passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default Passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
        },
        async (payload, done) => {
            try {
                let user = await User.findOne({ email: payload.email });
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, null);
                }
            } catch (error) {
                return done(error, null);
            }
        }
    )
);