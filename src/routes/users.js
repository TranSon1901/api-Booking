import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'
import { verifyToken } from '../utils/verifyToken.js'

const router=express.Router()

router.get('/checkauth',verifyToken, (req,res,next)=>{
     res.status(200).json('hello user, you are logged in')
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