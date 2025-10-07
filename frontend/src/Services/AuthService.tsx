import axiosInstance from "./axiosInstance";

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: {
        name: string;
        email: string;
        [key: string]: any;
    };
}

export const loginUser = async (login: LoginPayload): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post("/login", login);
        return response.data;
    } catch (error: any) {
        console.error("Login error:", error.response?.data || error.message);
        throw error;
    }
};
