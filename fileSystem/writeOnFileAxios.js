import axios from "axios";

import dotenv from 'dotenv'
dotenv.config();

const response = await axios.get("https://api.unsplash.com/search/photos", {
  headers: {
    Authorization: `Client-ID ${process.env.MY_ACCESS_KEY}`,
  },
  params: {
    query: "cat",
    orientation: "landscape",
    page: 1,
    perPage: 1,
  },
});

console.log(response.data)