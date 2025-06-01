import express from "express";
import protectedRoute from "../Middleware/authProtected.js";
import unsplash from "../Api/unsplashAPI.js";
import { searchImage } from "../controller/unsplash.controller.js";


const router = express.Router();

router.get("/searchPage", protectedRoute ,(req, res, next) => {
  const username = req.user.username;
  res.render("searchImage",{photos:null,username});
});


router.post("/search", protectedRoute, searchImage);

export default router;
