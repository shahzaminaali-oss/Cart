import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [cat,setCat]=useState([])

 useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5000/view')
      const data = await res.json()
      setCat(data)
    } catch (error) {
      console.error('Error Fetching parts', error)
    }
  }

  fetchData()
}, [])

  return (
    <>
   <h1 className='font-bold flex justify-center  mt-12 text-4xl'> ADD YOUR CART</h1>
     <div className='flex flex-wrap justify-center gap-5 pt-12 pb-18 w-[1340px]'>
      {cat.length  > 0 ? 
      ( cat.map((item)=>(
            <div className='w-70 mt-6 pb-5 shadow-xl shadow-amber-500/50 ' key={item._id}> 
            <img className='object-cover h-64 w-full' src={`http://localhost:5000${item.img}`} alt={item.p} />
            <h2 className='px-5 pt-4 font-bold text-xl text-center'>{item.name}</h2>
            <p className='py-3 text-center'>Price : {item.price}</p>
            <Link to={`/product/${item._id}`}><button className='block mx-auto text-center bg-amber-500 font-bold p-3 cursor-pointer '>Add Cart</button></Link>
           
                </div>
        ))):
      ("no data") 
      }
    

    </div>
     </>
  )
}

export default Product
