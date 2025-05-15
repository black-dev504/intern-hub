// src/api/auth.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000' 
});

export const login = async (credentials) => {
  return await api.post('/login', credentials);
};

export const signup = async (userData) => {
  return await api.post('/signup', userData);
};
