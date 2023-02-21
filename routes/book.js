const express=require('express');
const router=express.Router();
const {createBook,getBook} =require('../controller/Book')

router.route('/book')
.post(createBook)
.get(getBook)




module.exports=router;