import axiosInstance from './axiosApi';
import { jwtDecode } from 'jwt-decode';

const refresh = localStorage.getItem('refresh_token');

const getUser = () => {
  if (refresh === null) {
    return { user_id: null, username: null, display_name: null };
  }
  const json = jwtDecode(refresh);
  return json;
};

const authenticate = async () => {

  if (refresh === null) {
    return false;
  }
  try {
    const response = await axiosInstance.post('http://localhost:8080/api/token/verify', {
      token: refresh,
    });
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const logout = async () => {
  try {
    await axiosInstance.post('/api/blacklist', {
      token: refresh,
    });

    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    window.location.href = '/';
  } catch (err) {
    console.log(err);
  }
};
export { authenticate, getUser, logout };
