import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Sign in failed");
        return;
      }

      const data = await response.json();
      // For example, save token and user info to localStorage here
      // localStorage.setItem("authToken", data.token);
      console.log("Sign in successful:", data);
      
      // Navigate to user profile page after successful sign in
      navigate("/user-profile");
    } catch (error) {
      console.error("Error during sign in:", error);
      setErrorMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome back</h1>
      <p className="text-gray-600 mb-8">Please enter your details</p>
      
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter email"
          required
        />

        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter password"
          required
        />

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
          <a href="#" className="text-sm text-purple-600 hover:text-purple-700">
            Forgot password
          </a>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 mb-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
