import axios, { InternalAxiosRequestConfig } from "axios";
import { removeUser } from "../Slices/UserSlice";
import { removeJwt } from "../Slices/JwtSlice";

// Base axios instance pointing to your backend
const axiosInstance = axios.create({
  baseURL: "http://careerpoint.duckdns.org", // backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to each request if exists
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response interceptor for 401
export const setupResponseInterceptor = (navigate: any, dispatch: any) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        dispatch(removeUser());
        dispatch(removeJwt());
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
