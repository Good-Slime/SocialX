import passport from "passport";

export const authenticate = (req,res,next) =>{
    passport.authenticate('jwt', { session: false },(err,user,data) =>{
        if(err){
            return next(err);
        }
        if(!user){
            return res.status(401).json({
                message:'unauthorized access'
            });
        }
        req.user = user;
        next();
    })(req,res,next);
}