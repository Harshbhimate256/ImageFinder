import unsplash from "../Api/unsplashAPI.js";

export const searchImage = async(req,res,next)=>{
    const input = req.body.search;
  if (!input) {
    return res.redirect("/unsplash/searchPage?inputNull=true")
  }
  try {
    const result =await unsplash.search.getPhotos({
      query: input,
      orientation: "landscape",
      page: 1,
      perPage: 24,
    });
    const username = req.user.username;
    const photos = result.response.results;
    res.render("searchImage",{photos,username})

  } catch (error) {
    next(error);
  }
}