const orderMid=async(req,res,next)=>{
    const {customer}=req.body

    if  (!customer || !customer.name || !customer.name.trim() ) {
      return res.status(400).json({ message: 'Name is required', success:false })
    }

    if  (!customer || !customer.phone || !customer.phone.trim() ) {
      return res.status(400).json({ message: 'phone is required', success:false })
    } 
  
     if  (!customer || !customer.address || !customer.address.trim() ) {
      return res.status(400).json({ message: 'address is required', success:false })
    } 

     if  (!customer || !customer.payment || !customer.payment.trim() ) {
      return res.status(400).json({ message: 'payment is required', success:false })
    } 

  

    next()

}

module.exports=orderMid