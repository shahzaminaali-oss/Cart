const catMod=require('../modal/catmod.cjs')

const catCon=async(req,res)=>{
    try{
            const {name, price,stock}=req.body
            const imgPath=req.file?`/upload/${req.file.filename}`:null

            const newCat= new catMod({name,price,stock,img:imgPath})
            await newCat.save()
            console.log("BODY:", req.body)
console.log("FILE:", req.file)

            res.status(200).json({
                message:'Category Created',
                success:true,

            })
    }
    catch(err){
        console.error('Something went wrong' , err)
  res.status(500).json({
                message:'Internal server error',
                success:false,

            })
    }
}

const catView=async(req,res)=>{
    try{
        const cat=await catMod.find().sort({createdAt:-1})
        res.status(200).json(cat)

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:'Server error',
            error:err.message
        })
    }
}

const getProduct=async(req,res)=>{
    try{
        const prod=await catMod.findById(req.params.id)
        if(prod){
 return res.status(200).json(prod)
        }
        return res.status(404).json({
            success:true,
            message:'Not Found',
        })

    }
    catch(err){
    res.status(500).json({
    success:false,
    message:'Server error',
    err:err.message
})
    }
}

const deleteProduct = async (req, res) => {
  try {
    console.log("DELETE HIT ID:", req.params.id); // 👈 check id

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: 'Product ID is required',
        success: false
      });
    }

    const deletedProduct = await catMod.findByIdAndDelete(id);

    console.log("DELETED:", deletedProduct); // 👈 check kya mil raha

    if (!deletedProduct) {
      return res.status(404).json({
        message: 'Product not found',
        success: false
      });
    }

    return res.status(200).json({
      message: 'Product deleted successfully',
      success: true
    });

  } catch (error) {
    console.log("ERROR:", error.message); // 👈 IMPORTANT

    return res.status(500).json({
      message: 'Server error',
      success: false,
      error: error.message
    });
  }
};

module.exports={catCon,catView,getProduct,deleteProduct}