const express=require('express');
const router=express.Router();
const {createBook,getBook,deleteBook, updateBook} =require('../controller/Book')

router.route('/book')
.post(createBook)
.get(getBook)

router.route('/book/:id')
.get(getBook)
.delete(deleteBook)
.put(updateBook)







module.exports=router;