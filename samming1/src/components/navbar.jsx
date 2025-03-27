import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    render(){
        return(
            <>
            {/* Navigation Bar */}

<nav className="flex items-center justify-between mb-12">
<div className="flex items-center space-x-2">
  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
    <span className="text-blue-900 font-bold">J</span>
  </div>
  <h1 className="text-xl font-bold">JustClick.com</h1>
</div>
<div className="hidden md:flex space-x-6">
  <a href="/" className="hover:text-yellow-500">Home</a>
  <a href="#" className="hover:text-yellow-500">Services</a>
  <a href="#" className="hover:text-yellow-500">Blog</a>
  <Link to="/login" className="hover:text-yellow-500">Login</Link>
  <Link to="/signup" className="hover:text-yellow-500">Sign Up</Link>
  <a href="#" className="hover:text-yellow-500">FAQ</a>
</div>
<div className="md:hidden">
  <button className="text-white focus:outline-none">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
</div>
</nav>
            </>
        )
    }
}

export default Navbar;