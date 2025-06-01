import fs from 'fs/promises'

export const deleteFile = (req,res) =>{
    try{
        fs.unlink('imageData.json')

        res.status(200).json({
            message:"file deleted successfully"
        })
        
        console.log("file deleted")
    }catch(error){
        console.log("error while deleting the file", error.message)
    }
}
