import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname: {
        type:String
    },
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    userProfile:{
        type:String, //url or filename will be stored
        default:'' 
    }
})

const User = mongoose.model("User",userSchema)
export default User;