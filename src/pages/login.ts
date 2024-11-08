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