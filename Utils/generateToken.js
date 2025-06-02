import jwt from 'jsonwebtoken'

const generateToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000, //15days expiry for client side cookie
        httpOnly:true, //prevents javasacript from accessing it
        sameSite:"strict" //only send cookie to same site
    })
}

export default generateToken;