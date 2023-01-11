const mongoose = require("mongoose")

const connect = async() => {
    await mongoose.connect(process.env.MONGO_URI)
}

mongoose.set('strictQuery', true)

mongoose.connection.on("connected",()=>{
    console.log("DB connected")
})

mongoose.connection.on("disconnected",()=>{
    console.log("DB disconnected")
})

module.exports = connect