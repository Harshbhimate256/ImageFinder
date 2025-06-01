import express from 'express'
import { login, logout, signup } from '../controller/auth.controller.js';
import protectedRoute from '../Middleware/authProtected.js';

const router = express.Router();


router.get("/login" , (req,res)=>{
    res.render("login")
})
router.get("/signup" , (req,res)=>{
    res.render("signup")
})

router.post("/login",login)
router.post("/signup",signup)
router.post("/logout",protectedRoute,logout)

export default router;