import React, { useState } from 'react';
import { FaTachometerAlt, FaEnvelope, FaCalendarAlt, FaMapMarkedAlt, FaImages, FaCogs, FaGift, FaKey, FaInfoCircle, FaBars } from 'react-icons/fa';

const SideNavbar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div className="h-screen bg-gray-800 fixed top-0 left-0 text-white w-64 space-y-6 py-7 px-2">
      {/* User Profile */}
      <div className="flex items-center space-x-4 px-4">
        <img
          src="/avatar.jfif" // Replace with actual user image URL
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="text-sm font-semibold">Sean Ngu</h4>
          <p className="text-xs text-gray-400">Frontend Developer</p>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase">Navigation</h3>
        <ul className="mt-2">
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaTachometerAlt className="mr-3" />
              Dashboard
              <span className="ml-auto bg-blue-600 text-xs px-2 py-1 rounded">NEW</span>
            </a>
            <ul className={`ml-4 ${isDashboardOpen ? 'block' : 'hidden'}`}>
              <li><a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">Dashboard v1</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">Dashboard v2</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">Dashboard v3</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaEnvelope className="mr-3" />
              Email
              <span className="ml-auto">10</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaCalendarAlt className="mr-3" />
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaMapMarkedAlt className="mr-3" />
              Map
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaImages className="mr-3" />
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaCogs className="mr-3" />
              Page Options
              <span className="ml-auto bg-blue-600 text-xs px-2 py-1 rounded">NEW</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaGift className="mr-3" />
              Extra
              <span className="ml-auto bg-blue-600 text-xs px-2 py-1 rounded">NEW</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaKey className="mr-3" />
              Login & Register
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaInfoCircle className="mr-3" />
              Version
              <span className="ml-auto bg-blue-600 text-xs px-2 py-1 rounded">NEW</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded">
              <FaBars className="mr-3" />
              Menu Level
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;