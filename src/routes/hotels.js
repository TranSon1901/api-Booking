import express, { response } from 'express'
import {createHotel,updateHotel,deleteHotel,
    getAllHotel,getHotel,countByHotel,countByType,getHotelRoom} 
from '../controllers/hotel.js'

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
router.get('/find/:id', getHotel)
router.get('/countByCity', countByHotel)
router.get('/countByType', countByType)
router.get('/room/:id', getHotelRoom)

export default router


