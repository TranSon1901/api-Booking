import express from 'express'

const router=express.Router()
router.get('/hotle',(req,res)=>{
    res.send('Hi hotles')
})
export default router