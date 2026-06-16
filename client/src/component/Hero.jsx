import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Parent container ki settings jo stagger animation control karti hai
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Top se niche aane wali animation
  const topDownVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat mx-auto bg-center"
        style={{ 
          backgroundImage: `url('./images/shop1.jpg')` 
        }}
      />
      <div className="absolute inset-0 bg-slate-800/75" />

      {/* Content Container with Stagger Effect */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white mt-12"
      >
        {/* Main Heading */}
        <motion.h1
          variants={topDownVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-serif italic tracking-tight mb-2 leading-tight"
        >
          Start Your Journey &
        </motion.h1>
        
        {/* Sub Heading */}
        <motion.h2 
          variants={topDownVariants}
          className="text-red-500 font-serif italic bg-clip-text text-4xl sm:text-5xl md:text-6xl mb-6"
        >
          Create An Account
        </motion.h2>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-20 to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;