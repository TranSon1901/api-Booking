import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'

const router=express.Router()
router.get('/',getAllUser)
router.get('/:id',getUser)
router.get('/',deleteUser)
router.get('/',updateUser)
export default router