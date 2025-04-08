import React from "react";
import SignInForm from "../Components/SignInForm.jsx"; 
import placeholderGraphic from "../assets/signinpageside.png";

const SignInPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section (Form) */}
      <div className="md:w-1/2 bg-white flex items-center justify-center">
        <SignInForm />
      </div>

      {/* Right Section (Illustration) */}
      <div className="md:w-1/2 bg-purple-100 flex items-center justify-center p-8">
        {/* You can replace the placeholder with your own illustration or SVG */}
        <img
          src={placeholderGraphic}
          alt="Placeholder Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SignInPage;
