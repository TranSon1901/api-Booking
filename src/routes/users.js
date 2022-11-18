import express from 'express'

const router=express.Router()
router.get('/user',(req,res)=>{
    res.send('Hi, Im user')
})
export default router