import { Router } from "express";

const propertyRouter = Router()

propertyRouter.get('/',(req,res)=>{
    res.status(200).json({message:"Properties routes are working"})
})
export default propertyRouter;