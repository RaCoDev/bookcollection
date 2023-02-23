const BookSchema=require('../models/BookModel');
const asyncHandler =require('../middleware/asynchandler');

//create a book
// method POST
exports.createBook=asyncHandler(async (req,res,next)=>{
        const book=await BookSchema.create(req.body);
        res.status(200).json({msg:book})


})


exports.getBook=asyncHandler(async (req,res,next)=>{
    const book =await BookSchema.findById(req.params.id)
    res.status(200).json({msg:book})
  

})
exports.deleteBook=asyncHandler(async (req,res,next)=>{
    const book =await BookSchema.deleteOne({title:req.params.title})

    res.status(200).json({msg:"deleted"})

})
exports.updateBook=asyncHandler(async (req,res,next)=>{
    const book =await BookSchema.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })

    res.status(200).json({msg:book})

})