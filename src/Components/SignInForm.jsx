import React from "react";
import { Link } from 'react-router-dom';


const SignInForm = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-8">
      {/* Logo or brand name (top-left corner if you want) */}
      <h1 className="text-2xl font-bold mb-6">Welcome back</h1>
      <p className="text-gray-600 mb-8">Please enter your details</p>
      
      {/* Email Address */}
      <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
        Email address
      </label>
      <input
        type="email"
        id="email"
        className="mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter email"
      />

      {/* Password */}
      <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter password"
      />

      {/* Remember me & Forgot Password */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 rounded"
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            Remember for 30 days
          </label>
        </div>
        <a
          href="#"
          className="text-sm text-purple-600 hover:text-purple-700"
        >
          Forgot password
        </a>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="w-full py-2 mb-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
      >
        Sign in
      </button>

      {/* Sign in with Google 
      <button
        type="button"
        className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-gray-100 transition-colors"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google Logo"
          className="h-5 w-5"
        />
        Sign in with Google
      </button>
      */}

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-sm">
            Don’t have an account?{" "}
            <Link
            to="/signup"
            className="text-purple-600 hover:text-purple-700 font-medium"
            >
            Sign up
            </Link>
        </p>
    </div>
    </div>
  );
};

export default SignInForm;
