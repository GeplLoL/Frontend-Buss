// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import BusList from './components/BusList';
import AddBus from './pages/AddBus';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="container mt-5">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AddBus" element={<AddBus />} />
          <Route path="/BusList" element={<BusList />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
