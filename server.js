const express=require('express')
const dotenv=require('dotenv');
const book=require('./routes/book')

dotenv.config({path:'./config/config.env'})

const app=express()

const dataReader=(req,res,next)=>{
    console.log(req)
    return next()
}

app.use(dataReader);
app.use(express.json())

app.use('/api/v1',book)


const PORT=process.env.PORT || 3000

app.listen(
    5000,
    console.log(`Server Running on port: ${PORT}`)
)