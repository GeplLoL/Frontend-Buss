import React, { useState } from 'react';
import axios from 'axios';

const AddBus = () => {
  const [busName, setBusName] = useState('');
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const busData = {
        id: 0,
        name: busName,
        routes,
      };
      await axios.post('https://localhost:7236/api/Bus', busData, {
        headers: { 'Content-Type': 'application/json' },
      });
      alert('Bus added successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Add Bus</h1>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bus Name:</label>
          <input
            type="text"
            value={busName}
            onChange={(e) => setBusName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Bus</button>
      </form>
    </div>
  );
};

export default AddBus;
