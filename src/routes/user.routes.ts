import { Router } from "express";

const userRoute = Router()

userRoute.get('/',(req,res)=>{
    res.status(200).json({message:"User routes are working"})
})
export default userRoute;