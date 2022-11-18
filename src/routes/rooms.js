import express from 'express'

const router=express.Router()
router.get('/room',(req,res)=>{
    res.send('Hello room')
})
export default router

