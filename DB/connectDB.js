import mongoose from "mongoose";


const connectDB = async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("mongo DB connected")
    }catch(error){
        console.log("error occured while connecting to mongo db",error.message)
    }
}
export default connectDB;