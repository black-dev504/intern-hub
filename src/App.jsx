import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './assets/components/Nav';
import Home from './assets/components/landing/Home';
import About from './assets/components/About';
import Login from './assets/components/Login';

const App = () => {
  return (
    <Router>
      <div className="primary-font w-full mx-auto overflow-hidden">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />

        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;