import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './assets/components/Nav';
import Landing from './assets/components/landing/Landing';
import About from './assets/components/About';
import Login from './assets/components/Login';
import Home from './assets/components/Homepage/Home';
import Editprofile from './assets/components/Profile/Editprofile';

const AppContent = () => {
  const location = useLocation(); 

  return (
    <div className="primary-font w-full mx-auto overflow-hidden">
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/editprofile" element={<Editprofile />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>

 
        <AppContent />
  </Router>
);

export default App;