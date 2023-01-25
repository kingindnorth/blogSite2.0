const router = require("express").Router()

const {createBlog, deleteBlog} = require("../controllers/blog")
 
router.get("/", createBlog)

module.exports = router