import axios, { InternalAxiosRequestConfig } from "axios";
import { removeUser } from "../Slices/UserSlice";
import { removeJwt } from "../Slices/JwtSlice";

const axiosInstance = axios.create({
    baseURL: "https://careerpoint.duckdns.org/auth", // include /auth prefix
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor: attach token if available
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

// Response interceptor: handle 401 Unauthorized
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
