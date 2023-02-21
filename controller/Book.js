//create a book
// method POST
exports.createBook=(req,res,next)=>{
    console.log(req.body)

    res.status(200).json({hello:"world"})

}


exports.getBook=(req,res,next)=>{
    console.log(req.body)

    res.status(200).json({hello:"get world"})

}