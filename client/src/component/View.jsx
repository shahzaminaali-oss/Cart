import React from 'react'
import { Link } from 'react-router-dom'
const View = () => {
    const view=[
        {
        img:'/images/view1.webp',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea placeat iste, quia, sapiente possimus numquam atque, aut maiores velit dolores. Cupiditate, aut? Dicta esse culpa vitae suscipit assumenda fuga.',
        btn:'Add Products',
        link:'/form'    
         },
         {
        img:'/images/view2.webp',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea placeat iste, quia, sapiente possimus numquam atque, aut maiores velit dolores. Cupiditate, aut? Dicta esse culpa vitae suscipit assumenda fuga.',
        btn:'View Products',
        link:'/pro'
         },
          {
        img:'/images/view1.webp',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea placeat iste, quia, sapiente possimus numquam atque, aut maiores velit dolores. Cupiditate, aut? Dicta esse culpa vitae suscipit assumenda fuga.',
        btn:'View Orders',
        link:'/order'    
         }

]
  return (
    <div className='flex justify-center gap-5 w-full'>
     {
        view.map((item,index)=>(
            <div className='w-80 mt-18 pb-5 shadow-xl shadow-amber-500/50' key={index}> 
            <img className='rounded-full object-cover h-64 w-64 mx-auto' src={item.img} alt={item.p} />
            <p className='p-5 text-center'>{item.p}</p>
            <Link to={item.link}> <button className='block mx-auto text-center bg-amber-500 font-bold p-3 cursor-pointer '>{item.btn}</button></Link>
           
                </div>
        ))
     }
    </div>
  )
}

export default View
