import Hotel from "../models/Hotel.js"
import { createError } from '../utils/error.js'


const createHotel = async (req,res) =>{
    const newHotel= new Hotel(req.body)
   try{
      const saveHotel= await newHotel.save()
      res.status(200).json(saveHotel)
   } catch(error){
     res.status(500).json(error)
   }
}
// const createHotels = (req,res)=>{
//       const newHotel = new Hotel(req.body)
//       newHotel.save()
//       .then(data=>res.status(200).json(data))
//       .catch(error=>res.status(500).json(error))
//     }

const updateHotel = async (req,res) =>{
    try{ 
        const updateHotel= await Hotel.findByIdAndUpdate(
        req.params.id, 
        {$set : req.body},
        {new:true})
           res.status(200).json(updateHotel)
    }catch(error){
        res.status(500).json(error)
    }
}
const deleteHotel = async (req,res)=>{
    try{
      await Hotel.findByIdAndDelete(req.params.id)
       res.status(200).json("delete Hotel")
    } catch(error){
       res.status(500).json(error)
    }
}
const getAllHotel =  async (req,res,next)=>{
    // const failed = true
    // if(failed) return next(createError(401,'You are not hotel'))
    try{
        const hotels = await Hotel.find({})
        res.status(200).json(hotels)
    }catch(error){
        res.status(500).json(error)
    }
}
const getHotel = async (req,res,next)=>{
    try{
        const hotel= await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch(error){
        next(error)
    }
}
export {createHotel,updateHotel,deleteHotel,getAllHotel,getHotel}