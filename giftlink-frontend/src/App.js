import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Import Navbar
import MainPage from './components/MainPage/MainPage'; // Import MainPage
import DetailsPage from './components/DetailsPage/DetailsPage'; // Import DetailsPage
import LoginPage from './components/LoginPage/LoginPage'; // Import LoginPage
import Profile from './components/Profile/Profile'; // Import Profile
import RegisterPage from './components/RegisterPage/RegisterPage'; // Import RegisterPage
import SearchPage from './components/SearchPage/SearchPage'; // Import SearchPage
import './App.css'; // Global styles for App

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar on all pages */}
      <Routes>
        {/* Define Routes for each page */}
        <Route path="/" element={<MainPage />} />
        <Route path="/home.html" element={<MainPage />} /> {/* Alternative home route */}
        <Route path="/app" element={<MainPage />} />
        <Route path="/gifts/:productId" element={<DetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
