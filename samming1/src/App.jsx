import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <div className="relative bg-gradient-to-r from-[#00008B] to-[#00008B] text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Navigation Bar */}
       <Navbar/>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text and Form */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">SUBSCRIBE NOW TO OUR NEWSLETTER</h2>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-64 px-4 py-3 rounded-lg border border-white text-yellow focus:outline-none focus:ring-2 focus:border-none focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Side: Image with Decorative Elements */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* Background Blob */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-yellow-500 rounded-full opacity-30 blur-3xl"></div>
          
          {/* Image */}
          <img
            src="/img2.jfif" // Replace with your image URL
            alt="Person working on laptop"
            className="relative w-104 h-80 md:w-102 md:h-96 object-cover rounded-3xl shadow-lg"
          />

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-500 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-4 border-yellow-500 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;