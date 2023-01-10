const getIndex = async(req,res) => {
    try{
        res.status(200).render("index")
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