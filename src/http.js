import axios from 'axios';

// Create axios instance with better defaults
const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://backendecommerse-production-75ff.up.railway.app/api' 
    : 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, // For sessions/cookies if using Sanctum
});

// Add request interceptor for auth tokens if needed
// http.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor for error handling
// http.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       // Handle different HTTP status codes
//       switch (error.response.status) {
//         case 401:
//           // Redirect to login or refresh token
//           break;
//         case 403:
//           // Show access denied message
//           break;
//         case 500:
//           // Show server error message
//           break;
//         default:
//           // Handle other errors
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default http;