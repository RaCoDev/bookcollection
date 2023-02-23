const express=require('express');
const router=express.Router();
const {createBook,getBook,deleteBook, updateBook} =require('../controller/Book')

router.route('/book')
.post(createBook)
.get(getBook)

router.route('/book/:title')
.get(getBook)
.delete(deleteBook)

router.route('/book/:id')
.put(updateBook)




module.exports=router;