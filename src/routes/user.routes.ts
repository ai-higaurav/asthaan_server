import { NextFunction, Request, Response, Router } from "express";
// import utils
import asyncHandler from "../utils/AsyncWrapper";


import { healthCheckup } from "../controllers/users";
const userRoute = Router()

userRoute.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:"User routes are working"})
})

userRoute.route('/test').get(asyncHandler(healthCheckup))

export default userRoute;