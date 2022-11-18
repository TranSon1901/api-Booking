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
//mildeware
app.use(express.json())
initRouter(app)

app.listen(PORT,()=>{
    connet()
    console.log(`connet back-end http://localhost:${PORT}`)
})