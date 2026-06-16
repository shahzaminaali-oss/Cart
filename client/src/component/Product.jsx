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
   <div className='mt-16 min-h-screen bg-neutral-50 px-4 md:px-8'>
 
  <div className='max-w-7xl mx-auto pt-6 flex justify-between items-center border-b border-gray-200 pb-4'>
    <h2 className='text-lg font-medium text-gray-600'>
      Welcome, <span className='text-red-600 font-bold'>{localStorage.getItem('loggedInuser') || 'Guest'}</span>
    </h2>
  </div>

 
  <h1 className='font-extrabold text-center mt-12 text-4xl tracking-tight text-gray-900 uppercase'>
    Add To <span className='text-red-600'>Cart</span>
  </h1>

 
  <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-8 pt-12 pb-24'>
    {cat.length > 0 ? (
      cat.map((item) => (
        <div 
          className='w-72 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 flex flex-col justify-between' 
          key={item._id}
        > 
          {/* Product Image Container */}
          <div className='relative overflow-hidden group h-64 bg-gray-100'>
            <img 
              className='object-cover h-full w-full transition-transform duration-500 group-hover:scale-110' 
              src={`http://localhost:5000${item.img}`} 
              alt={item.name} 
            />
            {item.stock <= 0 && (
              <span className='absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase'>
                Out of Stock
              </span>
            )}
          </div>

          <div className='p-5 flex-grow flex flex-col justify-between'>
            <div>
              <h2 className='font-bold text-xl text-gray-800 line-clamp-1 mb-2 text-center hover:text-red-600 transition-colors'>
                {item.name}
              </h2>
              
              <div className='flex justify-between items-center my-4 bg-gray-50 px-3 py-2 rounded-lg text-sm'>
                <p className='text-gray-500 font-medium'>Stock: <span className={item.stock > 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{item.stock}</span></p>
                <p className='text-red-600 font-extrabold text-lg'>Rs. {item.price}</p>
              </div>
            </div>

          
            <Link to={`/product/${item._id}`} className='w-full block mt-2'>
              <button className='w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200 shadow-md shadow-red-600/20 active:scale-95 transform cursor-pointer tracking-wider uppercase text-sm'>
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      ))
    ) : (

      <div className='text-center py-20 w-full'>
        <div className='text-red-500 text-6xl mb-4'>🛒</div>
        <h3 className='text-xl font-semibold text-gray-700'>No Products Found</h3>
        <p className='text-gray-400 mt-2'>Please check back later or add some items.</p>
      </div>
    )}
  </div>
</div>
  )
}

export default Product
