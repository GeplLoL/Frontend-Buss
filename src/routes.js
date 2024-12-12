import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddBus from './pages/AddBus';
import AddRoute from './pages/AddRoute';
import BusList from './components/BusList';



const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/AddBus" element={<AddBus />} />
    <Route path="/addroute/:busId" element={<AddRoute />} />
    <Route path="/busList" element={<BusList />} />


  </Routes>
);

export default AppRoutes;
