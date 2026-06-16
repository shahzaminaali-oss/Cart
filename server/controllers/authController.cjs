
const userModel = require("../modal/user.cjs");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require("dotenv").config();



const signup = async(req , res) =>{
try{
        const {name,email,password} = req.body;
        const user = await userModel.findOne({email})
        if(user){
            return res.status(409).json({message : "user is already exist, you can login" , success : true})
        }
        const newModel=new userModel ({name , email, password})
        newModel.password= await bcrypt.hash(password , 10)
        await newModel.save()
        res.status(201)
        .json({
             message : "sign up successsful",
             success : true
            })
}
catch(err){
    console.log("Signup error", err)
res.status(500)
        .json({
             message : "internal server error",
             success : false
            })
}
}

const login = async(req , res) =>{
try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        const sendError= "Auth failed email and password id wrong"
        if(!user){
            return res.status(404).json({message : sendError , success : false})
        }
        const ispasEqual = await bcrypt.compare(password,user.password)
if(!ispasEqual) {
    return res.status(404)
    .json({message : sendError , success : false})
}
const jwtToken= jwt.sign(
    {
    email : user.email, _id:user._id
    },
    process.env.JWT_SECRET,

    {
        expiresIn :'24h'
    }
)

        res.status(200)
        .json({
             message : "login successs",
             success : true,
             jwtToken,
               email,
             name:user.name
           
            })


}
catch(err){
     console.error("SIGNUP ERROR:", err);
res.status(500)
        .json({
             message : "internal server error",
             success : false
            })
}
}


module.exports = {
    signup,
    login
}