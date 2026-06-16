import React from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Checkout = () => {
    const location=useLocation()

    const {product,
                count,
                Delivery,
                subCharge,}=location.state || {}    

                const defaultVal={
                  name:'',
                  address:'',
                  phone:'',
                  payment:''
                }
                const {register,
                  handleSubmit,
                  reset
                }=useForm({defaultValues: defaultVal})

const onsubmit=async(data)=>{
  console.log('data',data)

  const orderData={
    customer:data,
    product:{
      productId:product._id,
      name:product.name,
      price:product.price
    },
    
quantity:count,
delivery:Delivery,
subtotal:subCharge,


  }

  try{
      const res=await fetch('http://localhost:5000/api/order',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(orderData)
      })

       const result = await res.json() 

      if(res.ok){
        alert(result.message)
        reset(defaultVal)
        }
        else
        alert( result.message)
  }
  catch(error){
      alert('Something went wrong',error)
  }

}
      return (
    <div className='flex justify-center gap-0 h-screen'>
    
<div className='bg-amber-500 flex flex-col gap-3 items-center w-1/4 h-120 mt-22 ml-12'>
<h1 className='font-bold text-4xl mt-12 '>Checkout</h1>
    <div className='flex w-64 mt-2' ><p className='font-bold text-xl'>Product : </p> <span className='py-1 px-2'>{product.name}</span></div>
    <div className='flex w-64 mt-1' ><p className='font-bold text-xl'>Price : </p> <span className='py-1 px-2'>{product.price}</span></div>
 <div className='flex w-64 mt-1' ><p className='font-bold text-xl'>Quantity : </p> <span className='py-1 px-2'>{count}</span></div>
 
 <div className='flex w-64 mt-1' ><p className='font-bold text-xl'>Delivery Charges : </p> <span className='py-1 px-2'>{Delivery}</span></div>
 <div className='flex w-64 mt-1' ><p className='font-bold text-xl'>SubTotal : </p> <span className='py-1 px-2'>{subCharge}</span></div>

</div>

<div>

</div>
<form
        className="flex flex-col items-center mx-6 mt-22 shadow-lg shadow-amber-500/60 w-1/2 h-120 py-2"
        onSubmit={handleSubmit(onsubmit)}
      >
        <div className="p-3 mb-4 mt-6  border border-amber-500">
          <input
            className="focus:outline-none w-[300px]"
            {...register('name')}
            type="text"
            placeholder="Enter Name"
          />
        </div>

        <div className="p-3 my-4 border border-amber-500">
          <input
            className="focus:outline-none w-[300px]"
            {...register('address')}
            type="text"
            placeholder="Enter Address"
          />
        </div>

        <div className="p-3 my-4 border border-amber-500">
          <input
            className="focus:outline-none w-[300px]"
            {...register('phone')}
            type="text"
            placeholder="Enter Phone Number"
          />
        </div>
 <div className="p-2 my-4 border border-amber-500">
        <select {...register('payment')}  className='focus:outline-none w-[300px]  bg-amber-50' defaultValue="">
          <option  className='bg-amber-500' value="" disabled>Select Payment</option>
           <option value="COD" >Cash on Delivery</option>
           <option value="Card">CARD</option>
        </select>
</div>

        <button
          className="block mx-auto mb-3 mt-4 text-center bg-amber-500 font-bold p-3 cursor-pointer  w-[300px] "
          type="submit"
        >
          Order Now
        </button>
      </form>
    
    </div>
  )
}

export default Checkout
