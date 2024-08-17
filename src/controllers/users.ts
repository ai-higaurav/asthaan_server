import { NextFunction, Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { getUserToken } from "../services/user/user.services";

export const healthCheckup = async(req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Health Status : OK").send(res)
}

export const handleWebhook = async(req:Request , res:Response , next:NextFunction)=>{
    const {userId ,name, email , password , phone ='', emailVerification=false , phoneVerification=false} = req.body;
    console.log(userId)
}

export const getToken = async(req:Request , res:Response , next:NextFunction)=>{

}


