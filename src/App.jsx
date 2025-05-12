import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './assets/components/Nav';
import Landing from './assets/components/landing/Landing';
import About from './assets/components/About';
import Login from './assets/components/Login';
import Home from './assets/components/Homepage/Home'
import Editprofile from './assets/components/Profile/Editprofile';

const App = () => {
  return (
    <Router>
      <div className="primary-font w-full mx-auto overflow-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Editprofile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />

        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;