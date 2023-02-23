const express=require('express')
const dotenv=require('dotenv');
const book=require('./routes/book')
const connectDB=require('./config/db');
const errorHandler = require('./middleware/errrohandler');

dotenv.config({path:'./config/config.env'})

connectDB();

const app=express()

const dataReader=(req,res,next)=>{
    console.log(req)
    return next()
}

app.use(dataReader);
app.use(express.json())

app.use('/api/v1',book)
app.use(errorHandler)


const PORT=process.env.PORT || 3000

const server=app.listen(
    5000,
    console.log(`Server Running on port: ${PORT}`)
)

process.on('unhandledRejection',(error,promise)=>{
    console.log(`Error: ${error.message}`);
    server.close(()=>process.exit(1))
    

})