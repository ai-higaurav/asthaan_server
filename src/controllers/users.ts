import { NextFunction, Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";

export const healthCheckup = async(req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Health Status : OK").send(res)
}

