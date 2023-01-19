const Blog = require("../models/Blog")

const getIndex = async(req,res) => {
    try{
        const blogs = await Blog.find()
        const featuredBlogs = await Blog.find({featured:true})
        res.status(200).render("index",{
            isAuthenticated:req.isAuthenticated(),
            blogs,
            featuredBlogs
        })
    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

const getSinglePost = async(req,res) => {
    try{
        res.status(200).render("singlePost")
    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = {getIndex, getSinglePost}