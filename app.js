const express = require("express")

require("dotenv").config()

const app = express()

app.use(express.static("public"))

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`
    server started on port: ${PORT}
    site: http://localhost:${PORT}/
    `)
})