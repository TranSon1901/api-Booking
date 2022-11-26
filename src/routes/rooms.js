import express from 'express'
import { createRoom, deleteRoom, getALLRoom, getRoom, updateRoom,updateRoomaVailability } from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router=express.Router()
router.get('/', getALLRoom)
router.get('/:id', getRoom)
router.post('/:hotelid', createRoom)
router.delete('/:id/:hotelid', deleteRoom)
router.put('/:id', updateRoom)
router.put('/availability/:id', updateRoomaVailability)

export default router

