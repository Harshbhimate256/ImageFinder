import mongoose from "mongoose";


const connectDB = async(req,res,next)=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("mongo DB connected")
    }catch(error){
        next(error)
    }
}
//use pool connection(helps to manage the load) (more easy with RDBMS)
//use package called multer
//make function of URL generator
export default connectDB;