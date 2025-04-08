// src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import RegisteredUsers from "../Components/RegisteredUsers";
import UserRequests from "../Components/UserRequests.jsx";
import ServiceProviders from "../Components/ServiceProviders";
import ProviderApplications from "../Components/ProviderApplications";

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("users");

  const renderContent = () => {
    switch (selectedOption) {
      case "users":
        return <RegisteredUsers />;
      case "userRequests":
        return <UserRequests />;
      case "providers":
        return <ServiceProviders />;
      case "providerApplications":
        return <ProviderApplications />;
      default:
        return <RegisteredUsers />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with consistent purple theme; ensure AdminSidebar is updated similarly */}
      <AdminSidebar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      
      {/* Main content area with white background, subtle shadow, and rounded corners */}
      <div className="flex-grow p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
