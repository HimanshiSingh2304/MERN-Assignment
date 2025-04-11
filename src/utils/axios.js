import axios from 'axios';

// Create an axios instance with your backend URL
const axiosInstance = axios.create({
  baseURL: 'https://mern-assignment-ff5k.onrender.com',  // Hardcoded backend URL
  withCredentials: true,  // If you're using cookies/sessions
});

export default axiosInstance;