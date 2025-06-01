import express from 'express'
import dotenv from 'dotenv'
import connectDB from './DB/connectDB.js';
import authRoute from './Routes/auth.Routes.js'
import cookieParser from 'cookie-parser';
import ErrorHandler from './Middleware/Error/ErrorHandler.js'
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import unsplashRoutes from './Routes/unsplash.Routes.js'
import fsRoutes from './Routes/fs.routes.js'
const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// Enable form body parsing
app.use(express.urlencoded({ extended: true }));

//only for ejs setup not required if using react
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

dotenv.config()
app.use(cookieParser())
app.use(express.json())

app.use(express.static(path.join(__dirname, "stylesheets")));

app.get("/",(req,res)=>{
    res.send("hello from express")
})

app.use("/auth",authRoute);
app.use("/unsplash", unsplashRoutes);
app.use("/fs", fsRoutes);

app.use(ErrorHandler)

const PORT = process.env.PORT || 3010

app.listen(PORT,()=>{
    connectDB()
    console.log(`server runnning on port ${PORT}`)
})

export default app;