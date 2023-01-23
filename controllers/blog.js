const Blog = require("../models/Blog")

const createBlog = async(req,res) => {
    try{
        const {
            title,
            desc,
            data
        } = req.body

        const newBlog = await Blog.create({
            title,
            desc,
            data
        })

        res.json("blog created")


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