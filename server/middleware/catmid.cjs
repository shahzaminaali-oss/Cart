
const CatMid=async(req,res,next)=>{
       const {name,price,stock}=req.body
       const img=req.file
       
       if(!name || !name.trim())
       {
        return res.status(404).json({
            message:'Product Name is required',
            success:false
        })
       }
       
 if (!stock) {
  return res.status(400).json({
    message: 'Stock is required',
    success: false
  });
}

if (stock <= 0) {
  return res.status(400).json({
    message: 'Stock must be greater than 0',
    success: false
  });
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

