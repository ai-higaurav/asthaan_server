import dotenv from 'dotenv'
import app from './app'
import connectToDb from './db/dbConnection'

dotenv.config({
    path:"./.env"
})

connectToDb()
.then(()=>{
    const PORT = process.env.PORT || 5000
    app.listen(PORT,()=>{
        console.log("Server Status: OK", PORT)
    })
})
.catch((err)=>{
    console.log(err)
})
