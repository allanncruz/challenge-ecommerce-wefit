import axios from 'axios';

const API_BASE_URL = 'https://wefit-movies.vercel.app/api/';
const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;