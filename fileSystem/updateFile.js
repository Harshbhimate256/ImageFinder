import unsplash from "../Api/unsplashAPI.js";
import fs from "fs/promises";
export const fetchAndUpdate = async (req, res) => {
  try {
    const { query } = req.body;
    const data = await unsplash.search.getPhotos({
      query: query,
      orientation: "landscape",
      page: 1,
      perPage: 2,
    });
    const result = JSON.stringify(data, null, 2);
    fs.appendFile("imageData.json", result);

    res.status(200).json({
      message: "image data updated to file imageData.json",
    });

    console.log("file updated");
  } catch (error) {
    console.log("error while udating data", error);
  }
};
