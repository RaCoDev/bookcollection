const BookSchema=require('../models/BookModel')

//create a book
// method POST
exports.createBook=async (req,res,next)=>{

   const book=await BookSchema.create(req.body);

    
    console.log(req.body)

    res.status(200).json({msg:book})

}


exports.getBook=async (req,res,next)=>{
    const book =await BookSchema.aggregate([{$match:{title:new RegExp(req.params.title)}}])

    res.status(200).json({msg:book})

}
exports.deleteBook=async (req,res,next)=>{
    const book =await BookSchema.deleteOne({title:req.params.title})

    res.status(200).json({msg:"deleted"})

}
exports.updateBook=async (req,res,next)=>{
    const book =await BookSchema.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })

    res.status(200).json({msg:book})

}