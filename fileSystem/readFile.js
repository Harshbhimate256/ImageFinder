import { readFile } from "fs/promises";
export const fileRead = async (req,res,next) => {
  try {
    const data = await readFile("imageData.json", "utf8");
    // console.log(typeof data)
    const newData = JSON.parse(data)
    res.status(200).json({
        data:newData
    })
  } catch (error) {
    next(error)
  }
};
