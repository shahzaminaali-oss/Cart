import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Home = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-amber-500">
 <motion.h1
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="font-bold text-3xl md:text-5xl text-center pt-32 my-5 text-white"
>
  Your One-Stop Online Shopping Destination
</motion.h1>



    <motion.p 
      initial={{opacity:0,y:40,scale:0.95}}
      animate={{opacity:1,y:1, scale:1}}
      transition={{duration:1,delay:0.2,ease:'easeInOut'}}
      className="my-4 text-center text-white px-64">
      Discover a wide range of high-quality products at unbeatable prices.
      From daily essentials to the latest trends, everything you need is just a click away.
      Enjoy fast delivery, secure payments, and a smooth shopping experience designed just for you.
    </motion.p>
  

  <Link to="/view">
 

<motion.button
  initial={{ opacity: 0, y: -10 ,scale:0.95 }}
  animate={{ opacity: 1, y: 0 , scale:1}}
  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
 whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  className="font-bold text-lg px-6 py-3 bg-black text-white cursor-pointer"
>
  Get Started
</motion.button>

  </Link>
</div>

  )
}

export default Home
