import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to='/'>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent cursor-pointer">
              DevFlex
            </span>
            </Link>
          </div>

          {/* Right: Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="text-red-600 hover:text-red-700 font-medium transition duration-200 cursor-pointer">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl font-medium shadow-sm hover:shadow transition duration-200">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-3 shadow-lg">
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full text-left text-gray-600 hover:text-red-600 font-medium py-2">
              Log In
            </button>
          </Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl font-medium text-center block">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;