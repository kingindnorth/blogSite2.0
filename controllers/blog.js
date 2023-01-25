const Blog = require("../models/Blog")

const createBlog = async(req,res) => {
    try{
        console.log(req.user);
        const featuredBlogs = await Blog.find({featured:true})
        const fb = featuredBlogs.slice(0,3)
        res.status(200).render("createBlog",{
            isAuthenticated:req.isAuthenticated(),
            fb
        })


    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

const deleteBlog = async(req,res) => {
    try{
        const param = req.params.id

        await Blog.findByIdAndDelete(param)

        res.json("blog deleted")

    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = {createBlog, deleteBlog}