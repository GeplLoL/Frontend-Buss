'use client';

import React from 'react';
import BusList from '../components/BusList';


const Home = () => (
  <div className="container text-center mt-5">
    <h1>Welcome to MyApp</h1>
    <p className="lead">This is a sample application with login and registration functionality.</p>
    <BusList />
  </div>
);

export default Home;
