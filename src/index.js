import express from 'express'
import dotenv from 'dotenv'
import initRouter from './routes/initRoutes.js'
import connect from './config/connetDB.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
const PORT=process.env.PORT


//connet mongoDB
connect()

const app=express()
//middleware
app.use(cookieParser())
app.use(express.json())
app.use(cors())
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
    console.log(`connet back-end http://localhost:${PORT}`)
})