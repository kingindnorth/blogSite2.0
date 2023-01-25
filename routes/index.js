const router = require("express").Router()

const {getIndex, getSinglePost} = require("../controllers/index")

router.get("/",getIndex)
// router.get("/:id",getSinglePost)

module.exports = router