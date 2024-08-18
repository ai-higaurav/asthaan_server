import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { ZodError } from 'zod'
import ApiResponse from './utils/ApiResponse'
import rateLimit from 'express-rate-limit'

const app = express()

// app config
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}))
app.use(express.json())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message:()=>{
        return ApiResponse.rateLimit([],"Maximum request threshold limit reached. Please wait before trying again.",429)
    }
}))

import userRoute from './routes/user.routes'
import propertyRouter from './routes/property.routes'


app.use('/api/v1/users/', userRoute)
app.use('/api/v1/properties/', propertyRouter)

app.use((err:Error , req:Request , res:Response , next:NextFunction)=>{
    console.log(err, "This is custome error")
    if(err instanceof ZodError){
        console.log(JSON.parse(err.message)[0]?.message)
        return ApiResponse.failure([], JSON.parse(err.message)[0]?.message, 400).send(res)
    }
})
export default app;