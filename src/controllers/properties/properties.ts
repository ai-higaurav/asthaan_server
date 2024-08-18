import { NextFunction, Request, Response } from "express"

import ApiResponse from "../../utils/ApiResponse"
import { getLimit, getListed, updateImages } from "../../services/properties/properties.services"
import { images, propertyVal } from "../../utils/validation/Validation"


export const handleList =async(req:Request , res:Response, next:NextFunction )=>{

    const payload =  propertyVal.parse(req.body)
    const {listedProperties, userLimit = 0}=await getLimit(payload.sellerId)  
    
    if(listedProperties >= userLimit){
        return ApiResponse.failure([],"Maximum property limit reached", 400).send(res)
    }
    
    const response = await getListed(payload)
    if(response){
        return ApiResponse.success([],"Property has been listed successfully", 200).send(res)
    }
}


export const handleImages =async(req:Request , res:Response, next:NextFunction )=>{

    const payload = images.parse(req.body.images)
    const propertyId=req.body.propertyId
    const response = await updateImages(propertyId, payload)
    
    if(response){
        return ApiResponse.success([],"Images has been updated", 200).send(res)
    }
}
