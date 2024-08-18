import mongoose,{Document , Schema} from 'mongoose'

export interface IUser extends Document{
    userId:string
    name:string
    email:string
    password:string
    phone:string
    limit:number
    subscription:{
        subscribedAt:Date
        expiredAt:Date
    }
    emailVerification:boolean
    phoneVerification:boolean
}
const userSchema:Schema<IUser> = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String
    },
    phone:{
        type:String,
        required:true,
    },
    limit:{
        type:Number,
        default:1
    },
    subscription:{
        subscribedAt:{
            type:Date,
            default:Date.now
        },
        expiredAt:{
            type:Date,
            default:new Date(0)
        }
    },
    emailVerification:{
        type:Boolean,
        default:false
        },
    phoneVerification:{
        type:Boolean,
        default:false
    }

})

const User = mongoose.model<IUser>('User', userSchema, 'user')

export default User;