import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routerAuthor from './routes/auth.js'
import routerHotels from './routes/hotels.js'
import routerRooms from './routes/rooms.js'
import routerUsers from './routes/users.js'
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
app.use('/author',routerAuthor)
app.use('/hotel',routerHotels)
app.use('/room',routerRooms)
app.use('/user',routerUsers)

app.listen(PORT,()=>{
    connet()
    console.log(`connet back-end http://localhost:${PORT}`)
})