import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from './utils';
import { Mail, Lock, ArrowRight, ShoppingBag } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    
    // Quick validation fix (Bitwise | ko Logical || kiya)
    if (!email || !password) {
      return handleError('All fields are required');
    }
    
    try {
      const url = "http://localhost:5000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(login)
      });
      
      const result = await response.json();
      const { success, jwtToken, name, message, error } = result;
      
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInuser', name);
        setTimeout(() => {
          navigate('/pro'); 
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 p-4 font-sans mt-8">
   
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[550px]">
        
       
        <div className="w-full md:w-1/2 relative bg-slate-650 flex flex-col justify-between p-8 text-white overflow-hidden">
         
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-slate-950/70 to-slate-950/40" />

     
          <div className="relative z-10 flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-red-500" />
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DevFlex
            </span>
          </div>

    
          <div className="relative z-10 mt-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
              Welcome Back to Your Ultimate Fashion Hub.
            </h2>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              Log in to access your saved items, track orders, and experience personalized premium shopping tailored just for you.
            </p>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Account Login
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
           
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
                  value={login.email}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200 text-slate-800 placeholder:text-gray-400"
                />
              </div>
            </div>

          
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Password
                </label>
               
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <Lock size={18} />
                </span>
                <input 
                  onChange={handlechange} 
                  type="password"
                  name="password"
                  placeholder='Enter your password'
                  value={login.password}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200 text-slate-800 placeholder:text-gray-400"
                />
              </div>
            </div>

           
            <button 
              type='submit' 
              className='w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-600/10 hover:shadow-red-600/20 transition-all duration-200 text-sm mt-2 cursor-pointer group'
            >
              <span>Secure Log In</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>

         
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-600 font-bold hover:underline transition duration-200">
              Sign Up Free
            </Link>
          </p>
        </div>

      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;