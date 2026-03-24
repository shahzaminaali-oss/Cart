import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaTrash, FaEye, FaSync } from "react-icons/fa";

const Order = () => {

     const [cat,setCat]=useState([])

 useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/orderview')
      const data = await res.json()
      setCat(data)
    } catch (error) {
      console.error('Error Fetching parts', error)
    }
  }

  fetchData()
}, [])

  return (
    
    <div className='pt-12 w-full overflow-x-auto '>
      <h1 className='pb-12 pt-6 font-bold text-4xl text-center '>ORDER LIST</h1>
      <table className='border border-amber-700 min-w-max  overflow-y-auto  h-128'>
<thead>
  <tr>
    <th className='border-2 border-amber-700 px-5 py-4 text-center '>Order No</th>
    <th className='border-2 border-amber-700 px-2 text-center w-44'>Phone</th>
    <th className='border-2 border-amber-700 px-4 text-center w-54'>Customer Name</th>
    <th className='border-2 border-amber-700 px-5 text-center w-88'>Address</th>
    <th className='border-2 border-amber-700 px-5 text-center'>Payment Method</th>
    <th className='border-2 border-amber-700 px-5 text-center w-44'>Product</th>
    <th className='border-2 border-amber-700 px-5 text-center w-32'>Price</th>
    <th className='border-2 border-amber-700 px-5 text-center'>Quantity</th>
    <th className='border-2 border-amber-700 px-5 text-center'>Delivery Charges</th>
    <th className='border-2 border-amber-700 px-5 text-center w-32'>Subtotal</th>
    <th className='border-2 border-amber-700 px-5 text-center'>Order Status</th>
    <th className='border-2 border-amber-700 px-5 text-center'>Payment Status</th>
    <th className='border-2 border-amber-700 px-5 text-center w-32'>Actions</th>
  </tr>
</thead>
<tbody className='items-center border border-black'>
         {cat && cat.length  > 0 ? 
         ( cat.map((item,index)=>(


  <tr>
    <td className='text-center border-2 border-amber-700 p-3'>{index+1}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.customer.name}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.customer.phone}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.customer.address}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.customer.payment || item.paymentMethod}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.product.name}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.product.price}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.quantity}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.delivery}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.subtotal}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.orderStatus}</td>
    <td className='text-center border-2 border-amber-700 p-3'>{item.paymentStatus}</td>
<td className="border-2 border-amber-700 px-4 py-2">
  <div className="flex gap-3 justify-center">
    {/* Delete */}
    <button className="text-red-600 hover:text-red-800 text-lg cursor-pointer">
      <FaTrash />
    </button>

    {/* Update */}
    <button className="text-green-600 hover:text-green-800 text-lg cursor-pointer">
      <FaSync />
    </button>

    {/* View */}
    <button className="text-gray-600 hover:text-gray-800 text-lg cursor-pointer">
      <FaEye />
    </button>

  </div>
</td>

  </tr>
  ))):
         ("no data") 
         }
</tbody>
</table>



         
       
   
       </div>
  )
}

export default Order
