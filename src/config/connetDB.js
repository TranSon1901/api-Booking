import mongoose from "mongoose"
const connet = async()=>{
    try{
      await mongoose.connect(process.env.MONGO_DB)
      console.log('connet to mongoDB') 
    }catch(error){
        throw(error)
    }
}
export default connet