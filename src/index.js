import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import initRouter from './routes/initRoutes.js'
dotenv.config()
const PORT=process.env.PORT


//connet mongoDB
const connet = async()=>{
  try{
    await mongoose.connect(process.env.MONGO_DB)
    console.log('connet to mongoDB') 
  }catch(error){
      throw(error)
  }
}
const app=express()
//middleware
app.use(express.json())
initRouter(app)

app.use((err,req,res,next)=>{
    const errorStatus=err.status||500
    const errorMessage=err.message || 'something went wrong!'
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

//list connet Backend
app.listen(PORT,()=>{
    connet()
    console.log(`connet back-end http://localhost:${PORT}`)
})