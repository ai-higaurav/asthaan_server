import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

const app = express()

// app config
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}))
app.use(express.json())

import userRoute from './routes/user.routes'
import propertyRouter from './routes/property.route'

app.use('/api/v1/users/', userRoute)
app.use('/api/v1/properties/', propertyRouter)

app.use((err:Error , req:Request , res:Response , next:NextFunction)=>{
    console.log(err, "This is custome error")
})
export default app;