const errorHandler = (err,req,res,next)=>{
    let statusCode = err.statusCode || 500;
    let message = err.message || "internal server error"

    if(!err.isOperational){
        console.error("unexpected error",err)
        message = "something went wrong"
    }
    res.status(statusCode).json({
        success:false,
        message
    })
}

export default errorHandler;