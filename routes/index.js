const router = require("express").Router()

const {getIndex, getSinglePost} = require("../controllers/index")

router.get("/:id",getSinglePost)
router.get("/",getIndex)

module.exports = router