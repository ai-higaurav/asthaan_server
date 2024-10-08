import { NextFunction, Request, Response } from "express"

import ApiResponse from "../../utils/ApiResponse"
import { getLimit, getListed, getPropertyList, updateImages, updateProperty } from "../../services/properties/properties.services"
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

export const handlePropertyList =async(req:Request , res:Response, next:NextFunction )=>{
    const response = await getPropertyList()
    if(response){
        return ApiResponse.success(response, 'Property list fetch successfully',200).send(res)
    }
}

export const handleUpdateProperty =async(req:Request , res:Response, next:NextFunction )=>{
    const payload = propertyVal.parse(req.body)
    const response = await updateProperty(req.body._id, payload)

    if(response){
        return ApiResponse.success([response],"Property has been updated successfully", 200).send(res)
    }
}


