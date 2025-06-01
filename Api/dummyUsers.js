import axios from "axios"

const dummyUsers = async(req,res)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(result=> result.json())
    .then(json=> console.log(json))
}

const dummy1 = async(req,res)=>{
    const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(result.data)
}
dummy1();

