import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './Page/SignInPage.jsx'; // Adjust the path based on your folder structure
import SignUpPage from './Page/SignUpPage.jsx';
import Home from './Page/Home.jsx';
import ProviderRegisterPage from './Page/ProviderRegisterPage.jsx';
import FindServicePage from './Page/FindServicePage.jsx';
import AdminDashboard from './Page/AdminDashboard.jsx';
import ChatPage from './Page/ChatPage.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import UserProfile from './Page/UserProfile.jsx'; // Import the UserProfile component
function App() {
  return (
    <BrowserRouter>
      <div className="font-GoogleSans">
        <Navbar/>
        <Routes>
          {/* Set the sign in page as the default/homepage */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/provider-register" element={<ProviderRegisterPage />} />
          <Route path="/find-service" element={<FindServicePage />} />
         <Route path="/admin" element={<AdminDashboard/>} /> 
         <Route path="/user-profile" element={<UserProfile />} /> {/* Add this line for the user profile page */}
         <Route path="/about" element={<ChatPage />}/> {/* Add this line for the chat page */}
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
