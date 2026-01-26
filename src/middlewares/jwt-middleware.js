import jwt from "passport-jwt";
import User from "../models/user.js";
import config from "../utils/config.js";

const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}

export const passportAuth = (passport) =>{
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) =>{
        const user = await User.findById(jwt_payload.id);
        
        if(!user){
            return done(null, false);
        }
        else{
            return done(null, user);
        }
    })) 
}