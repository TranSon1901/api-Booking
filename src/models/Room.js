import mongoose, { Schema } from "mongoose";

const RoomSchema= new mongoose.Schema({
    title: {
        type:String,
        require:true,
    },
    price: {
        type:Number,
        require:true,
    },
    maxPeople: {
        type:Number,
        require:true
    },
    desc: {
        type:Boolean,
        require:true
    },
    roomNumbers:[{number:Number,unavailableDates:{type:[Date]}}]
},
    {timestamps: true}
)
export default mongoose.model('rooms',RoomSchema)