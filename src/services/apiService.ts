const API_BASE_URL = 'https://wefit-movies.vercel.app/api/';
import axios from 'axios';

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;