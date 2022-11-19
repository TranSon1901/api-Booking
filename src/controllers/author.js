import User from "../models/User.js"
import bcrypt from 'bcryptjs'
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
export {register}