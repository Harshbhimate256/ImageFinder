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
import profileRoute from './Routes/profile.routes.js'
const app = express();

//------------- Fix for __dirname in ES modules ---------------

//import.meta.url -> gives file url of the current module
const __filename = fileURLToPath(import.meta.url);//convert file url to nrml path
const __dirname = dirname(__filename);//extract dir path from file path



// Enable form body parsing
app.use(express.urlencoded({ extended: true }));

//only for ejs setup not required if using react
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

dotenv.config()
app.use(cookieParser())
app.use(express.json()) // parses incoming JSON payloads from body of PUT/POST request

app.use("/uploads",express.static('uploads')) //this will tell browser to search from uploads folder and no need to write 'upload' in the url or path

app.use(express.static(path.join(__dirname, "stylesheets")));

app.get("/",(req,res)=>{
    res.send("hello from express")
})

app.use("/auth",authRoute);
app.use("/unsplash", unsplashRoutes);
app.use("/fs", fsRoutes);
app.use("/profile",profileRoute)

app.use(ErrorHandler)

const PORT = process.env.PORT || 3010
/*
const server = http.createServer(app);
server.listen(port,()=>{
    connectMongoDB()
    console.log(`server is running on port ${port}`)
})
*/

app.listen(PORT,()=>{
    connectDB()
    console.log(`server runnning on port ${PORT}`)
})

export default app;