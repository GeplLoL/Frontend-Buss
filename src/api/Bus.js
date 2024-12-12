import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7236/api/Bus',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const addBus = async (bus) => {
  try {
    const response = await API.post('/', bus);
    console.log('Bus added successfully:', response.data);
  } catch (error) {
    console.error('Error adding bus:', error);
  }
};


export const addRoute = async (busId, route) => API.post(`/${busId}/routes`, route);
export const getBuses = async () => API.get('/');

