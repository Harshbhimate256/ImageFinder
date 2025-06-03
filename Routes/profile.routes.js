import express from 'express'
import upload from '../Utils/multer.js'
import  customError from '../Middleware/Error/CustomError.js'
import userModel from '../Models/User.js'
import authProtected from '../Middleware/authProtected.js'
import path from 'path'
const router = express.Router();



router.get("/myProfile",authProtected,async(req,res)=>{
    const userId = req.user._id;
    const user = await userModel.findById(userId).select("-password")
    const fileName = path.basename(user.userProfile)
    res.render("profile",{profileImage:fileName , name:user.fullname})
})

router.post("/upload",upload.single('profile'), authProtected ,async(req,res,next)=>{
    try{
        if(!req.file){
            throw new customError("No file uploaded",404)
        }
        const userId = req.user._id; //this will come from JWT
        const filePath = req.file.path.replace(/\\/g, "/");
        await userModel.findByIdAndUpdate(userId, {userProfile:filePath})
        res.status(201).json({
            message:"profile updated successfully"
        })
    }catch(error){
        next(error)
    }
})

export default router;