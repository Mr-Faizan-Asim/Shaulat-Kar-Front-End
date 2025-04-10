import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    cnic: "",
    phone: "",
    gender: "",
    location: ""
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.dob.trim()) {
      newErrors.dob = "Date of birth is required";
    }

    if (!formData.cnic.trim()) {
      newErrors.cnic = "CNIC is required";
    } else if (!/^[0-9]{5}-[0-9]{7}-[0-9]$/.test(formData.cnic)) {
      newErrors.cnic = "Invalid CNIC format (XXXXX-XXXXXXX-X)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setServerError(errorData.message || "Sign up failed");
        return;
      }

      const data = await response.json();
      console.log("Sign up successful:", data);
      // Optionally save a token or user data from the response
      // After successful sign-up, navigate to the profile page or sign in page
      navigate("/signin");
    } catch (error) {
      console.error("Error during sign up:", error);
      setServerError("Server error. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Create your account</h1>
      <p className="text-gray-600 mb-8">Please fill out the details below</p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className={`mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.name ? "border-red-500" : ""
          }`}
          required
        />
        {errors.name && <p className="text-red-500 text-xs mb-2">{errors.name}</p>}

        {/* Email */}
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={`mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.email ? "border-red-500" : ""
          }`}
          required
        />
        {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email}</p>}

        {/* Password */}
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          className={`mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.password ? "border-red-500" : ""
          }`}
          required
        />
        {errors.password && <p className="text-red-500 text-xs mb-2">{errors.password}</p>}

        {/* Date of Birth */}
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="dob">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className={`mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.dob ? "border-red-500" : ""
          }`}
          required
        />
        {errors.dob && <p className="text-red-500 text-xs mb-2">{errors.dob}</p>}

        {/* CNIC */}
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="cnic">
          CNIC
        </label>
        <input
          type="text"
          id="cnic"
          name="cnic"
          placeholder="XXXXX-XXXXXXX-X"
          value={formData.cnic}
          onChange={handleChange}
          className={`mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.cnic ? "border-red-500" : ""
          }`}
          required
        />
        {errors.cnic && <p className="text-red-500 text-xs mb-2">{errors.cnic}</p>}

        {/* Phone */}
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className={`mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.phone ? "border-red-500" : ""
          }`}
          required
        />
        {errors.phone && <p className="text-red-500 text-xs mb-2">{errors.phone}</p>}

        {/* Gender */}
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="gender">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={`mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.gender ? "border-red-500" : ""
          }`}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="text-red-500 text-xs mb-2">{errors.gender}</p>}

        {/* Location */}
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter your location"
          value={formData.location}
          onChange={handleChange}
          className={`mb-6 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.location ? "border-red-500" : ""
          }`}
          required
        />
        {errors.location && <p className="text-red-500 text-xs mb-2">{errors.location}</p>}

        {serverError && (
          <p className="text-red-500 text-sm mb-4">{serverError}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 mb-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm">
          Already have an account?{" "}
          <a href="#/signin" className="text-purple-600 hover:text-purple-700 font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
