const mongoose=require('mongoose')

const order=new mongoose.Schema({
    customer:{
        name:{type:String, required:true},
        address:{type:String, required:true},
         phone:{type:Number, required:true},
          payment:{
        type:String,
        enum:['COD','CARD'],
        required:true
     }
    },

    //order model ko product model ke sath connect kry
    product:{
        productId:{type:mongoose.Schema.Types.ObjectId, ref:'product'},
        name:String,
        price:Number
    },

    quantity:{type:Number, required:true},
    delivery:{type:Number, required:true},
     subtotal:{type:Number, required:true},

    

      orderStatus:{
        type:String,
        default:'pending'
     },

     paymentStatus:{
        type:String,
        default:'pending'
     }
})

const Order=mongoose.model('order',order)
module.exports=Order