const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../models/User")

const googleStrategy = (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: "710370975315-mun9ifof2ese37qkk9gl580ojp2lrpsi.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3001/auth/google/callback"
        },async(accessToken, refreshToken, profile, done)=>{
            console.log(profile)
            const newUser = {
                googleID:profile.id,
                firstName:profile.name.givenName,
                lastName:profile.name.familyName,
                image:profile.photos[0].value
            }
            try{
                let user = await User.findOne({googleId:profile.id})
                if(user){
                    done(null,user)
                }
                else{
                    user = await User.create(newUser)
                    done(null,user)
                }
            }catch(err){
                console.log(err)
            }
            
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id)
      })
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
      })
}

module.exports = googleStrategy