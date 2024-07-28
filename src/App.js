import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container fade-in">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/:role" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
