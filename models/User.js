const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    googleID:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:""
    },
    createdAT:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("User",UserSchema)