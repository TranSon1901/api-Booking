import mongoose from "mongoose";
const { Schema }= mongoose

const hotelSChema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    type:{
        type: String,
        require:true,
    },
    city:{
        type: String,
        require:true,
    },
    address:{
        type: String,
        require:true
    },
    distances:{
        type: String,
        require:true,
    },
    photos:{
        type: [String],
    },
    title:{
        type: String,
        require:true,
    },
    desc:{
        type: String,
        require:true,
    },
    rating:{
        type: Number,
        min:0,
        max:5,
    },
    rooms:{
        type: [String],      
    },
    cheapestPrice:{
        type: Number,
        require:true,
    },
    featured:{
        type: Boolean,
        default: false,
    }
})
export default mongoose.model('Hotel',hotelSChema)