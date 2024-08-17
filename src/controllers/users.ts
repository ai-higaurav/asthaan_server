import { NextFunction, Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";

import {
    getUserToken,
    isUserExists,
    registerUser,
    updateUser
} from "../services/user/user.services";
import User from "../models/user.model";
import { userValidation } from "../utils/Validation";


export const healthCheckup = async (req: Request, res: Response, next: NextFunction) => {
    return ApiResponse.success([], "Health Status : OK").send(res)
}

export const handleWebhook = async (req: Request, res: Response, next: NextFunction) => {

    const { userId=req.body.targets[0]?.$id, name, email, password, phone = '', emailVerification = false, phoneVerification = false } = req.body;
    const payload = {userId, name, email, password, phone, emailVerification, phoneVerification }
    const checkUser = await isUserExists(User, userId)
    const userData  = userValidation.parse(payload);

    if(checkUser.length !==0){
        const response = await updateUser(User, userId , userData)
        console.log(response)
        return ApiResponse.success([],"User has been update",200).send(res) 
    }
    
    if(userData){
        await registerUser(User, userData)
        return ApiResponse.success([],"User has been register successfully",200).send(res) 
    }

}

export const getToken = async (req: Request, res: Response, next: NextFunction) => {

}


