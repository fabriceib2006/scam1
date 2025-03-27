import React from "react";
import Navbar from "./navbar";

const SignUp = () => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Logic for handling form submission
    };
  
    return (
        <div className="relative bg-gradient-to-r from-[#00008B] to-[#00008B] text-white py-16 px-4 sm:px-6 h-screen lg:px-8 h-screen">
          {/* Header */}
          <Navbar/>
        {/* Main Content */}
          <main className="flex flex-1 items-center justify-center relative">
            {/* Background Image (You can add a background image here if needed) */}
            <div className="absolute inset-0 bg-blue-100 rounded-md opacity-10"></div>
    
            {/* Left Section: Headline and Counter */}
            <div className="relative z-10 text-center mr-70 text-white max-w-lg">
              <h1 className="text-5xl font-bold leading-tight">
                Save Money.<br />Make Money.
              </h1>
              <p className="mt-4 text-lg">
                Members like you have already cashed out:
              </p>
              <div className="mt-4 bg-yellow-500  opacity-60 rounded-lg p-4 text-4xl font-bold">
                  £362,096
              </div>
              <p className="mt-2 text-sm">in cash back from JustClick.com</p>
            </div>
    
            {/* Right Section: Sign-Up Form */}
            <div className="relative z-10 ml-8 bg-white rounded-lg shadow-lg p-6 w-96">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Join for free!</h2>
                <span className="text-yellow-500 font-semibold">£10 BONUS*</span>
              </div>
              <div className="mt-4 flex items-center">
                <input type="checkbox" id="terms" className="mr-2 w-7 h-7" />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  I agree to the <a href="#" className="text-blue-500 bord">Terms of Use</a> and to receive marketing email messages from Swagbucks, and I accept the <a href="#" className="text-blue-300">Privacy Policy</a>.
                </label>
              </div>
              <button className="mt-4 w-full bg-white border border-gray-300 rounded-lg py-2 flex items-center justify-center cursor-pointer text-gray-700 hover:bg-gray-100">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <button className="mt-2 w-full bg-white border border-gray-300 rounded-lg py-2 flex items-center justify-center cursor-pointer text-gray-700 hover:bg-gray-100">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mr-2" />
                Continue with Apple
              </button>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">OR</span>
              </div>
              <button className="mt-4 w-full bg-white border border-gray-300 rounded-lg cursor-pointer py-2 text-gray-700 hover:bg-gray-100">
                Continue with Email
              </button>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account? <a href="/login" className="text-blue-500">Log In</a>
                </p>
              </div>
            </div>
          </main>
        </div>
      );
  };
  
  export default SignUp;
  