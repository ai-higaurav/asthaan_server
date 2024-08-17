import mongoose from "mongoose";

const connectToDb= async() : Promise<void> =>{
    try {

        const DBURI = process.env.DB_URI as string
        const DBNAME= process.env.DB_NAME

        if (!DBURI || !DBNAME) {
            throw new Error("DB_URI and DB_NAME environment variables must be set");
        }

        const con = await mongoose.connect(DBURI,{dbName:DBNAME})
        console.log(con.connection.host)
    } catch (error) {
       throw new Error(`Faild to connect to db ${error}`)
    }
}

export default connectToDb;