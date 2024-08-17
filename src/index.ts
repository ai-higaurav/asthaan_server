import dotenv from 'dotenv'
import app from './app'
import connectToDb from './db/dbConnection'

dotenv.config({
    path:"./.env"
})


const PORT = process.env.PORT || 5000

connectToDb()

.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server Status: OK", PORT)
    })
})
.catch((err)=>{
    console.error(`Error starting server: ${err.message}`);
    console.error(err.stack);
})
