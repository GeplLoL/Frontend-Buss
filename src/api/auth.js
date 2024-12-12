// Базовый URL API
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7236/api/Auth',
  headers: {
    'Content-Type': 'application/json',
  },
});


// Регистрация пользователя
export const register = async (data) => {
  const response = await API.post('/register', data);
  return response.data;
};

// Логин пользователя
export const login = async (data) => {
  const response = await API.post('/login', data);
  return response.data;
};
