import axiosInstance from "../Interceptor/AxiosInterceptor";  // USE THIS

const loginUser = async (login: any) => {
    return axiosInstance
        .post(`/users/login`, login)   // ✅ FIXED ENDPOINT
        .then((result: any) => result.data)
        .catch((error: any) => { throw error; });
}

export { loginUser };
