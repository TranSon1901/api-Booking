import express, { response } from 'express'
import {createHotel,updateHotel,deleteHotel,getAllHotel,getHotel } from '../controllers/hotel.js'
import { createError } from '../utils/error.js'
const router=express.Router()
// CREATE 
router.post('/',createHotel)
//UPDate
router.put('/:id',updateHotel)
//DELETE
router.delete('/:id',deleteHotel)
//GET ALL HOTEL
router.get('/',getAllHotel)
//GET HOTLE
router.get('/:id', getHotel)

export default router


