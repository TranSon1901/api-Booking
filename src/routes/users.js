import express from 'express'
import { createUser, deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'

const router=express.Router()
router.get('/',getAllUser)
router.get('/',getUser)
router.get('/',createUser)
router.get('/',deleteUser)
router.get('/',updateUser)
export default router