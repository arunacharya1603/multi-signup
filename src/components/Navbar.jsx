import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const Navbar = () => {
  const { userData } = useContext(UserContext);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo and branding */}
              <p className="text-black-500 font-sacramento font-medium">
                dribble
              </p>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Navigation Links */}
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inspiration
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find Work
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Learn Design
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Go Pro
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Hire Designers
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Search input */}
            <div className="mr-2">
              <input
                className="border border-gray-300 bg-white h-8 px-2 rounded-lg text-sm focus:outline-none"
                placeholder="Search"
              />
            </div>

            <div className="ml-3 mr-3 relative">
              <div className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                {/* Display the user's profile image */}
                {userData.profileImage ? (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={userData.profileImage}
                    alt="Profile"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div> // Placeholder image or default
                )}
              </div>
            </div>

            {/* Upload button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upload
            </button>
            {/* Profile dropdown */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
