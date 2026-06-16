import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from './utils';
import { User, Mail, Lock, ArrowRight, ShoppingBag } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signup;
    
    // Quick validation fix (Bitwise | ko Logical || kiya)
    if (!name || !email || !password) {
      return handleError('All fields are required');
    }
    
    try {
      const url = "http://localhost:5000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(signup)
      });
      
      const result = await response.json();
      const { success, message, error } = result;
      
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 p-4 font-sans mt-6">
      
      {/* Container Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Premium Brand Branding & Image Banner */}
        <div className="w-full md:w-1/2 relative bg-slate-300 flex flex-col justify-between p-8 text-white overflow-hidden">
          {/* Working High-Quality Shopping Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-slate-950/70 to-slate-950/40" />

          {/* Logo */}
          <div className="relative z-10 flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-red-500" />
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DevFlex
            </span>
          </div>

          {/* Marketing Text */}
          <div className="relative z-10 mt-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
              Join the Fashion Revolution Today.
            </h2>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              Create a free account to unlock personalized dynamic feeds, faster checkout processing, and secure order tracking.
            </p>
          </div>
        </div>

        {/* Right Side: Form Layout */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Create Account
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Get started with your free digital shopping card.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            
            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <User size={18} />
                </span>
                <input 
                  onChange={handlechange} 
                  type="text"
                  name="name"
                  autoFocus
                  placeholder='John Doe'
                  value={signup.name}
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200 text-slate-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <Mail size={18} />
                </span>
                <input 
                  onChange={handlechange} 
                  type="email"
                  name="email"
                  placeholder='name@example.com'
                  value={signup.email}
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200 text-slate-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <Lock size={18} />
                </span>
                <input 
                  onChange={handlechange} 
                  type="password"
                  name="password"
                  placeholder='Create a strong password'
                  value={signup.password}
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200 text-slate-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type='submit' 
              className='w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-600/10 hover:shadow-red-600/20 transition-all duration-200 text-sm mt-4 cursor-pointer group'
            >
              <span>Register Account</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>

          {/* Bottom Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-red-600 font-bold hover:underline transition duration-200">
              Login
            </Link>
          </p>
        </div>

      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;