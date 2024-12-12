import React, { useState } from 'react';
import { addRoute } from '../api/Bus';

const AddRoute = ({ busId }) => {
  const [routeData, setRouteData] = useState({ startPoint: '', endPoint: '', departureTime: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRoute(busId, routeData);
      setMessage('Route added successfully!');
      setRouteData({ startPoint: '', endPoint: '', departureTime: '' });
    } catch (error) {
      setMessage('Error adding route');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Add Route</h1>
      <form onSubmit={handleSubmit} className="w-50 mx-auto mt-4">
        <div className="mb-3">
          <label className="form-label">Start Point:</label>
          <input
            type="text"
            className="form-control"
            value={routeData.startPoint}
            onChange={(e) => setRouteData({ ...routeData, startPoint: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">End Point:</label>
          <input
            type="text"
            className="form-control"
            value={routeData.endPoint}
            onChange={(e) => setRouteData({ ...routeData, endPoint: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Departure Time:</label>
          <input
            type="time"
            className="form-control"
            value={routeData.departureTime}
            onChange={(e) => setRouteData({ ...routeData, departureTime: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Add Route</button>
      </form>
      {message && <p className="text-center mt-3">{message}</p>}
    </div>
  );
};

export default AddRoute;
