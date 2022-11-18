import express from 'express'

const router=express.Router()
router.get('/',(req,res)=>{
    res.send('Hi hotles')
})
export default router