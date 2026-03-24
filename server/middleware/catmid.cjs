
const CatMid=async(req,res,next)=>{
       const {name,price}=req.body
       const img=req.file
       
       if(!name || !name.trim())
       {
        return res.status(404).json({
            message:'Product Name is required',
            success:false
        })
       }
       
 if(!price)
       {
        return res.status(404).json({
            message:'Product price is required',
            success:false
        })
       }

        if(!img)
       {
        return res.status(404).json({
            message:'Product Image is required',
            success:false
        })
       }

       next()

}

module.exports=CatMid

