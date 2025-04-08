import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Navigation Links */}
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-2xl">
              Shaulat Kar
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/find-service"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find Near Service
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/provider-register"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register as Service Provider
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Login Button */}
          <div className="hidden md:block">
            <Link
              to="/signin"
              className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              About
            </Link>
            <Link
              to="/find-service"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Find Near Service
            </Link>
            <Link
              to="/contact"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Contact
            </Link>
            <Link
              to="/provider-register"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Register as Service Provider
            </Link>
            <Link
              to="/signin"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 border-t border-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
