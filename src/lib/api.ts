import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',  // Rails APIのベースURL
  withCredentials: true,             // 認証情報のCookieを自動で送信
});

export default api;