const mongoose= require('mongoose')
const Schema=mongoose.Schema;

const uerSchema = {
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true
    }
}

const userModel=mongoose.model('product' , uerSchema )
module.exports=userModel;