import React from "react";
import SignUpForm from "../Components/SignUpForm.jsx"; 
import placeholderGraphic from "../assets/signinpageside.png"; // Adjust the path based on your folder structure

const SignUpPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section (white background, form) */}
      <div className="md:w-1/2 bg-white flex items-center justify-center">
        <SignUpForm />
      </div>

      {/* Right Section (purple background, illustration) */}
      <div className="md:w-1/2 bg-purple-100 flex items-center justify-center p-8">
        <img
          src={placeholderGraphic}
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
