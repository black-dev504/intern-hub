// src/api/auth.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true // 👈 include cookies with requests
});

export const login = async (credentials) => {
  return await api.post('/login', credentials);
};

export const signup = async (userData) => {
  return await api.post('/signup', userData);
};

export const logout = async () => {
  return await api.post('/logout');
};

export const getProfile = async (user) => {
  return await api.get('/profile',user);
};

export const updateProfile = async (field, data) => {
  return await api.put(`/profile/${field}`, data );
};

