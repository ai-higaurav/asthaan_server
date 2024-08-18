import Property from "../../models/property.model";
import User from "../../models/user.model";


export const getListed = async(payload:{}={})=>{
    const data = new Property(payload)
    return await data.save()
}

export const getLimit = async(sellerId:string)=>{
    
    const properties = await Property.find({sellerId:sellerId})
    console.log(properties)
    const listedProperties = properties?.length

    const getUserLimit = await User.findById(sellerId)
    const userLimit = getUserLimit?.limit

    return {listedProperties,userLimit}
}


export const updateImages = async(propertyId:string , payload:string[]=[])=>{
        const response = await Property.findByIdAndUpdate(propertyId,{images:payload},{new:true})
        return response;
}