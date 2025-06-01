import unsplash from "../Api/unsplashAPI.js";
// import fs from "fs";
import fs from "fs/promises";

export const fetchingImage = async (req, res,next) => {
  try {
    const { query } = req.body;
    const result = await unsplash.search.getPhotos({
      query: query,
      orientation: "landscape",
      page: 1,
      perPage: 1,
    });

    const data = JSON.stringify(result, null, 2);

    await fs.writeFile("imageData.json", data);
    // fs.writeFileSync("imageData.json", data); // here execution of script will be paused until the process is finished

    res.status(200).json({
      message: "image data saved to file imageData.json",
      data: data,
    });

    console.log("image data saved to the file imageData.json");
  } catch (error) {
    next(error)
  }
};
