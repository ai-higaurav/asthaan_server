import mongoose,{Document , Schema} from 'mongoose'

interface IUser extends Document{
    name:string
    email:string
    password:string
    phone:string
    emailVerification:boolean
    phoneVerification:boolean
}
const userSchema:Schema<IUser> = new mongoose.Schema({
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