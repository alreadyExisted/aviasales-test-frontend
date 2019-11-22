import axios from "axios";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL
};

const api = axios.create(config);

api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
