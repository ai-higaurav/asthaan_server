import express from 'express'
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

export default app;