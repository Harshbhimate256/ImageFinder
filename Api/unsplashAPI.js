import { createApi } from "unsplash-js";
import nodeFetch from 'node-fetch'
import dotenv from 'dotenv'



dotenv.config();


const unsplash = createApi({
    accessKey : process.env.MY_ACCESS_KEY,
    fetch:nodeFetch
})


export default unsplash;












// const data  = async(req,res)=>{

//     const result = await unsplash.search.getPhotos({
//         query:"cat",
//         orientation:"landscape",
//         page:1,
//         perPage:1
//     })
//     const photo = JSON.stringify(result,null,2)
//     console.log(photo);
// }

