import userModel from "../Models/User.js";
import CustomError from "../Middleware/Error/CustomError.js";
import bcrypt from "bcrypt";
import generateToken from "../Utils/generateToken.js";
import logger from "../Logger/logger.js";

export const signup = async (req, res, next) => {
  const { fullname, username, password } = req.body;

  try {
    if (!fullname || !username || !password) {
      return res.redirect("/auth/signup?EmptyFieldNull=true");
    }
    const user = await userModel.findOne({ username });
    if (user) {
      throw new CustomError("User already exists", 401);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      fullname,
      username,
      password: hashedPassword,
    });
    if (!newUser) {
      throw new CustomError("Failed to Sign Up", 400);
    }

    generateToken(newUser._id, res);
    await newUser.save();

    logger.info(
      `Account created with username: ${username} , fullname: ${fullname}`
    );

    res.redirect("/auth/login");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.redirect("/auth/login?InvalidInput=true");
    }

    const checkPassword = await bcrypt.compare(password, user.password || "");
    if (!user || !checkPassword) {
      return res.redirect("/auth/login?InvalidInput=true");
    }

    generateToken(user._id, res);

    logger.info(`login: ${username}`); //this will log the username after successfull login

    res.redirect("/unsplash/searchPage"); //this will redirect to search page after successfull login
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    const username = req.user?.username || "Unknown user";

    res.cookie("jwt", "", { maxAge: 0 });

    logger.info(`Logout done by: ${username}`);

    res.redirect("/auth/login");
  } catch (error) {
    next(error);
  }
};
