const router = require("express").Router()

const {createBlog, addBlog} = require("../controllers/blog")
 
router.get("/", createBlog)

router.post("/",addBlog)

module.exports = router