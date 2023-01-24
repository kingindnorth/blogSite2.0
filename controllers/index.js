const Blog = require("../models/Blog")

const getIndex = async(req,res) => {
    try{
        console.log(req.user);
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
        const param = req.params.id
        const blog = await Blog.findById(param)
        const relatedPost = await Blog.find({tag:blog.tag})
        const tags = relatedPost.slice(0,3)
        res.status(200).render("singlePost",{
            isAuthenticated: req.isAuthenticated(),
            blog,
            tags
        })
    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = {getIndex, getSinglePost}