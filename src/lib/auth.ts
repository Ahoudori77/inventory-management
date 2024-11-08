import api from './api';
import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:3001/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};


export const logout = async () => {
  try {
    await api.delete('/logout');
  } catch (error) {
    throw new Error('ログアウトに失敗しました');
  }
};