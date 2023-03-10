const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    image:{
        type:String,
        default:""
    },
    data:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"post"
    },
    featured:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    comment:{
        type:Array
    },
    likes:{
        type:Number,
        default:0
    },
    createdAT:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Blog",BlogSchema)