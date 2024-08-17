import { Request, Response, Router } from "express";

const propertyRouter = Router()

propertyRouter.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:"Properties routes are working"})
})
export default propertyRouter;