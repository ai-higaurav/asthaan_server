import { Model, Schema } from "mongoose"
import { IUser } from "../../models/user.model"

export const registerUser = async(model:Model<IUser>, payload:{}={} )=>{
    const data = new model(payload)
    const response = await data.save()
    return response;
}

export const isUserExists = async(model:Model<IUser>, userId:string)=>{
    const response = await model.find({userId:userId})
    return response;
}

export const updateUser = async(model:Model<IUser>, userId:string, payload:{}={})=>{
    const response = await model.findOneAndUpdate({userId:userId},{$set:payload},{new:true})
    return response;
}

export const getUserToken = async()=>{

}

