import Hotel from "../models/Hotel.js"
import { createError } from '../utils/error.js'
import Room from "../models/Room.js";
//CREAAT 
const createHotel = async (req,res,next) =>{
    const newHotel= new Hotel(req.body)
   try{
      const saveHotel= await newHotel.save()
      res.status(200).json(saveHotel)
   } catch(error){
     next(error)
   }
}
// const createHotels = (req,res)=>{
//       const newHotel = new Hotel(req.body)
//       newHotel.save()
//       .then(data=>res.status(200).json(data))
//       .catch(error=>res.status(500).json(error))
//     }
//UPDATE
const updateHotel = async (req,res,next) =>{
    try{ 
        const updateHotel= await Hotel.findByIdAndUpdate(
        req.params.id, 
        {$set : req.body},
        {new:true})
           res.status(200).json(updateHotel)
    }catch(error){
        next(error)
    }
}
//DELETE
const deleteHotel = async (req,res,next)=>{
    try{
      await Hotel.findByIdAndDelete(req.params.id)
       res.status(200).json("delete Hotel")
    } catch(error){
        next(error)
    }
}
//GETALL hotel
const getAllHotel =  async (req,res,next)=>{
    const { min , max , ...others} = req.query
    try{
        const hotels = await Hotel.find({...others,
            cheapestPrice:{ $gt:min | 1, $lt:max || 900 }})
            .limit(req.query.limit)
        res.status(200).json(hotels)
    }catch(error){
        next(error)
    }
}
//GET hotel
const getHotel = async (req,res,next)=>{
    try{
        const hotel= await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch(error){
        next(error)
    }
}
const countByHotel = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list= await Promise.all(cities.map(city=>{
          return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch(error){
        next(error)
    }
}
const countByType = async (req,res,next)=>{
    try{
        const hotelCount= await Hotel.countDocuments({type:"hotel"})
        const apartmentCount= await Hotel.countDocuments({type:"apartments"})
        const resortCount= await Hotel.countDocuments({type:"resort"})
        const villaCount= await Hotel.countDocuments({type:"villa"})
        const cabinCount= await Hotel.countDocuments({type:"cabin"})
        res.status(200).json([
            {type:"hotel", count: hotelCount},
            {type:"apartments", count: apartmentCount},
            {type:"resorts", count:resortCount },
            {type:"villas", count: villaCount},
            {type:"cabins", count: cabinCount}
        ])
    } catch(error){
        next(error)
    }
}
const getHotelRoom = async (req,res,next) =>{
    console.log(req.params.id)
    try{
      const hotel = await Hotel.findById(req.params.id)
      const list = await Promise.all(hotel.rooms.map(room=>{
        return Room.findById(room)
      }))
      return res.status(200).json(list)
    }catch(error){
        next(error)
    }
}
export {createHotel,updateHotel,deleteHotel,getAllHotel,getHotel,countByHotel,countByType,getHotelRoom}