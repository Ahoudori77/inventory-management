import api from './api';

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('ログインに失敗しました');
  }
};

export const logout = async () => {
  try {
    await api.delete('/logout');
  } catch (error) {
    throw new Error('ログアウトに失敗しました');
  }
};