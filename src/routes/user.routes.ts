import { Request, Response, Router } from "express";

const userRoute = Router()

userRoute.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:"User routes are working"})
})
export default userRoute;