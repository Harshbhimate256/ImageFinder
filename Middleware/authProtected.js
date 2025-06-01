import jwt from "jsonwebtoken";
import CustomError from "./Error/CustomError.js";
import userModel from "../Models/User.js";


const protectedRoute = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.redirect("/auth/login?notLoggedIn=true");
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      throw new CustomError("Unauthorized", 401);
    }

    const user = await userModel.findById(decode.userId).select("-password");
    console.log(user);

    if (!user) {
      throw new CustomError("User not found", 404);
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default protectedRoute;
