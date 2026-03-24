import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Prodetails = () => {
    const {id}=useParams()
    const navigate=useNavigate()

    console.log('id',id)
    const [product,setProduct]=useState(null)
    const [count,setCount]=useState(1)
    const Delivery=200
    
    const Add=()=>{
        setCount(count+1)
    }
    const Subtract=()=>{
        if(count>1)
        setCount(count-1)
    }
   
    useEffect(()=>{
        const fetchProduct= async()=> {
            try{
            const res=await fetch(`http://localhost:5000/pro/${id}`)
            const data=await res.json()
            setProduct(data)
            }
            catch(err){
                console.error('Not found', err.message)
            }
        }
        fetchProduct()
    },[id])

    const handleCheckout=()=>{
        navigate('/checkout',{
            state:{
                product,
                count,
                Delivery,
                subCharge,
            }
        })
    }

    
    if(!product) return <p>No product found</p>
     const subtotal=(count*product.price)
     const subCharge=subtotal+Delivery
  return (
    <>
   <div className='flex w-full h-screen'>
<div className='flex flex-col w-2/3 h-128 p-5 mt-12 justify-start'>
      <img className='object-cover border border-black h-120 w-full mx-auto' src={`http://localhost:5000${product.img}`} alt={product.name} />
      <h2 className='px-5 pt-4 font-bold text-xl text-center'>{product.name}</h2>
      <p className='py-1 text-center'> <span className='font-bold text-xl'>Price :</span> {product.price}</p>
    </div>

<div className='shadow-xl shadow-amber-500/50 flex flex-col gap-3 items-center w-1/3 h-140 mt-12 mx-6'>
    <h1 className='font-bold text-4xl mt-6 '>Checkout</h1>
    <p className='py-4'>Adjust Quantity</p>
    <div className='flex gap-3 pb-3'>
        <button onClick={Add} className='font-bold text-xl px-3 py-1 cursor-pointer bg-amber-600' >+</button>
        <button className='px-5'>{count}</button>
        <button onClick={Subtract} className='font-bold text-xl px-3 py-1 cursor-pointer bg-amber-600'>-</button>
    </div>
 <div className='flex w-64' ><p className='font-bold text-xl'>Price : </p> <span className='py-1 px-2'>{product.price}</span></div>
 <div className='flex w-64' ><p className='font-bold text-xl'>Quantity : </p> <span className='py-1 px-2'>{count}</span></div>
 <div className='flex w-64' ><p className='font-bold text-xl'>Total : </p> <span className='py-1 px-2'>{subtotal}</span></div>
 <div className='flex w-64' ><p className='font-bold text-xl'>Delivery Charges : </p> <span className='py-1 px-2'>{Delivery}</span></div>
 <div className='flex w-64' ><p className='font-bold text-xl'>SubTotal : </p> <span className='py-1 px-2'>{subCharge}</span></div>

<button onClick={handleCheckout} className='bg-amber-700 px-12 py-3 mt-5 cursor-pointer font-bold'>Proceed to Checkout</button>
</div>
   </div>
    
       
    </>
   
  )
}

export default Prodetails
