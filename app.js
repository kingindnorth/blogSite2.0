const express = require("express")
const ejs = require("ejs")
const layout = require("express-ejs-layouts")

const connect = require("./utils/db")

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

//routes
app.use("/",require("./routes/index"))

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    connect()
    console.log(`
    server started on port: ${PORT}
    site: http://localhost:${PORT}/
    `)
})