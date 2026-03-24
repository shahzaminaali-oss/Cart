const mongoose=require('mongoose')
const catModal=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     price:{
        type:Number,
        required:true
    },  
     img:{
        type:String,
        required:true
    }
    
})

const Cat=mongoose.model('cat', catModal)
module.exports=Cat