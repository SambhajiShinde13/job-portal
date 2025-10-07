import axios, { InternalAxiosRequestConfig } from "axios";
import { removeUser } from "../Slices/UserSlice";
import { removeJwt } from "../Slices/JwtSlice";

// ✅ Use API URL from environment (.env)
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Attach JWT token (if exists)
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

// ✅ Handle 401 Unauthorized globally
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
