import express from 'express'
import { createRoom, deleteRoom, getALLRoom, getRoom, updateRoom } from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router=express.Router()
router.get('/', getALLRoom)
router.get('/:id', getRoom)
router.post('/:hotelid', createRoom)
router.delete('/:id/:hotelid', deleteRoom)
router.put('/id', updateRoom)

export default router

