const router = require("express").Router()
const passport = require("passport")

const logout = require("../controllers/auth")

//google login
router.get("/google",passport.authenticate('google', { scope: ['profile'] }))
router.get("/google/callback",passport.authenticate('google', { failureRedirect: '/auth/google' }),
    (req,res)=>{
        res.redirect("/")
})

//logout
router.get("/logout",logout)

module.exports = router