const orderModel=require('../modal/ordermod.cjs')

const order=async(req,res)=>{
    try{
 const {customer,product,quantity,delivery,subtotal}=req.body

    const orderDetails=await orderModel.create({
        customer:{
            name:customer.name,
            phone:customer.phone,
            address:customer.address,
            payment:customer.payment
        },
        product:{
            productId:product.productId,
            name:product.name,
            price:product.price
        },

        quantity,
        delivery,
        subtotal,
        paymentStatus: 'pending',
      orderStatus: 'pending',
    
    })

    if(orderDetails)
    {
            res.status(200).json({
                success:true,
                message:'Order Successfull'
            })
    }
    }
    catch(err){
 res.status(500).json({
                success:false,
                message:err.message
            })
    }
   
}

const orderView=async(req,res)=>{
    try{
   const order=await orderModel.find().sort({createdAt:-1})
 res.status(200).json(order)

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:'Server error',
            error:err.message
        })
    }
}

module.exports={order,orderView}