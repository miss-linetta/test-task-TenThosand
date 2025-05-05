import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com/auth';

export const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
