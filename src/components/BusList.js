import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [error, setError] = useState(null);
  const [newBusName, setNewBusName] = useState(''); 
  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:7236/api/Bus');
      console.log('API Response:', response.data); 
      setBuses(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      setError(err.message);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddBus = async () => {
    try {
      const newBus = { name: newBusName, routes: [] };
      const response = await axios.post('https://localhost:7236/api/Bus', newBus);
      console.log('POST Response:', response.data);
      fetchData(); 
    } catch (err) {
      setError(err.message);
      console.error('Error adding bus:', err);
    }
  };
  

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Bus List</h1>
      <div>
        <input
          type="text"
          value={newBusName}
          placeholder="Имя автобуса"
          onChange={(e) => setNewBusName(e.target.value)}
        />
        <button onClick={handleAddBus}>Добавить автобус</button>
      </div>
      {buses.length > 0 ? (
        <ul>
          {buses.map((bus) => (
            <li key={bus.id}>
              {bus.name} — маршруты: {bus.routes?.length || 0}
            </li>
          ))}
        </ul>
      ) : (
        <p>No buses available.</p>
      )}
    </div>
  );
};

export default BusList;
