const router = require("express").Router()

const {createBlog, deleteBlog} = require("../controllers/blog")
 
router.post("/createBlog", createBlog)
// router.put("/updateBlog/:id",upateBlog)
router.delete("/deleteBlog/:id",deleteBlog)

module.exports = router