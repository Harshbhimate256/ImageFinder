class CustomError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;//HTTP status code  (this keyword refers to instance of the object being created)
        this.isOperational = true;// distinguish expected vs unexpected 

        // Error.captureStackTrace(this ,this.constructor);
    }
}
//use this method without using class just make a function and extend the Error
export default CustomError;