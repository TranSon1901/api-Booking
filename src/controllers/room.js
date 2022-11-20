import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
//CREATE ROOM
const createRoom = async (req,res,next)=>{
    const hotelID= req.params.hotelid
    const newRoom= new Room(req.body)
    try{
       const saveRoom = await newRoom.save()
       try{
          await Hotel.findByIdAndUpdate(hotelID,
            {$push: {rooms:saveRoom._id} })
       } catch(err){
           next(err)
       }
       res.status(200).json(saveRoom)
    }catch(err){
       next(e)
    }
}
const getRoom= async (req,res,next)=>{
    try{
       const getRoom = await Room.findById(req.params.id)
       res.status(200).json(getRoom)
    }catch(err){
        next(err)
    }
}
const getALLRoom= async (req,res,next)=>{
    try{
       const getAllRoom = await Room.find()
       res.status(200).json(getAllRoom)
    }catch(err){
        next(err)
    }
}
const updateRoom= async (req,res,next)=>{
    const hotelID= req.params.hotelid
    try{
       const updateRoom= await Room.findByIdAndUpdate(
        req.params.id,
        {$set : req.body},
        {new:true})
        try{

        }catch(err){

        }
        res.status(200).json(updateRoom)
    }catch(err){
        next(err)
    }
}
const deleteRoom= async (req,res,next)=>{
    const hotelID= req.params.hotelid
    try{
       await Room.findByIdAndDelete(req.params.id)
       try{
          await Hotel.findByIdAndUpdate(hotelID,{ $pull: {rooms:req.params.id} })
       } catch(err){
          next(err)
       }
       res.status(200).json('delete room succses')
    }catch(err){
       next(err)
    }
}

export {createRoom,getALLRoom,getRoom,deleteRoom,updateRoom}