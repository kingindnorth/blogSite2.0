const express = require("express")
const path = require("path")
const ejs = require("ejs")
const layout = require("express-ejs-layouts")
const session = require("express-session")
const passport = require("passport")

const connect = require("./utils/db")

require("./utils/googleStrategy")(passport)
require("dotenv").config()

const app = express()

//serve static files
app.use(express.static("public"))

//body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//templationg engine
app.use(layout)
app.set("view engine","ejs")
app.set("views","views")

//session
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true
  }))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/",require("./routes/index"))
app.use("/auth",require("./routes/auth"))

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    connect()
    console.log(`
    server started on port: ${PORT}
    site: http://localhost:${PORT}/
    `)
})