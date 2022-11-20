import express, { response } from 'express'
import {createHotel,updateHotel,deleteHotel,getAllHotel,getHotel } from '../controllers/hotel.js'

import { verifyAdmin } from '../utils/verifyToken.js'
const router=express.Router()
// CREATE 
router.post('/',verifyAdmin ,createHotel)
//UPDate
router.put('/:id',verifyAdmin ,updateHotel)
//DELETE
router.delete('/:id',verifyAdmin ,deleteHotel)
//GET ALL HOTEL
router.get('/',getAllHotel)
//GET HOTLE
router.get('/:id', getHotel)

export default router


