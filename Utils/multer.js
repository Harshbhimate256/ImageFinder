import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from 'path'

const storage = multer.diskStorage({
    destination:"uploads",
    filename:function(req,file,cb){
        const uniqueName = uuidv4()+path.extname(file.originalname); //this will generate unique filename using uuid
        cb(null,uniqueName)
    }
})

const upload = multer({storage:storage})
export default upload;