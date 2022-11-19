import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'
import { verifyAdim, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router=express.Router()

router.get('/checkauth',verifyToken, (req,res,next)=>{
     res.status(200).json('hello user, you are logged in')
})
router.get('/checkuser/:id',verifyUser, (req,res,next)=>{
    res.status(200).json('hello user, you can detele user')
})
router.get('/checkadim/:id',verifyAdim, (req,res,next)=>{
    res.status(200).json('hello adim, you can detele all user')
})
//GET ALL USER
router.get('/',getAllUser)
//GET USER
router.get('/:id',getUser)
//DELETE USER
router.delete('/:id',deleteUser)
//UPDATE USER
router.put('/:id',updateUser)

export default router