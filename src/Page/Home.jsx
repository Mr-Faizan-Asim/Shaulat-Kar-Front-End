import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Features from "../Components/Features.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold text-white">
              Welcome to Shaulat Kar
            </h1>
            <p className="mt-4 text-xl text-white">
              Your trusted platform to register as a service provider or hire top talent for daily life tasks.
            </p>
            <div className="mt-8">
              <Link
                to="/signin"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">Seamless Onboarding</h3>
                <p className="mt-4 text-gray-600">
                  Register effortlessly as a user or service provider with a modern authentication process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">Profile Management</h3>
                <p className="mt-4 text-gray-600">
                  Manage your profile and track all service requests, reviews, and notifications in one place.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">Request & Hire</h3>
                <p className="mt-4 text-gray-600">
                  Request services tailored to your needs and hire trusted professionals for any daily task.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Call-to-Action Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">
                Experience the Future of Daily Services
              </h2>
              <p className="mt-4 text-gray-600">
                Whether you need a trusted service provider for home repairs, cleaning, or other everyday tasks, Shaulat Kar has you covered. Register to become a service provider or hire professionals directly through our platform.
              </p>
              <div className="mt-6">
                <Link
                  to="/services"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Request a Service
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* Replace the src below with your own illustration or image */}
              <img
                src="https://via.placeholder.com/400x300"
                alt="Service illustration"
                className="w-full rounded-lg shadow"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
