import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
const register = async (req,res,next)=>{
    try{
       const salt = bcrypt.genSaltSync(10);
       const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = User({
        username:req.body.username,
        email:req.body.email,
        password:hash
      })
      await newUser.save()
      res.status(200).send('user have create')
   }catch(err){
      next(err)
   }
}
const login = async (req,res,next) =>{
    try{
      const user = await User.findOne({username:req.body.username})
      if(!user) return next(createError(404,'not found user'))

      const isPassWordCorret= await bcrypt.compareSync(req.body.password, user.password);
      if(!isPassWordCorret) return next(createError(400,'error password'))
      
      const {password,isAdmin,...otherDetails}= user._doc
      res.status(200).json(otherDetails)
    } catch(err){
        next(err)
    }
}
export {register,login}