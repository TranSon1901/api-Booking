import express from 'express'
import { createRoom, deleteRoom, getALLRoom, getRoom, updateRoom } from '../controllers/room.js'


const router=express.Router()
router.get('/', getALLRoom)
router.get('/:id', getRoom)
router.get('/', createRoom)
router.get('/:id', deleteRoom)
router.get('/id', updateRoom)

export default router

