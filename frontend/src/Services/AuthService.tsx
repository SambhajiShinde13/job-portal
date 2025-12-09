import axiosInstance from "../Interceptor/AxiosInterceptor";

const loginUser = async (login: any) => {
    return axiosInstance
        .post("/users/login", login)   // ✅ correct endpoint
        .then((result: any) => result.data)
        .catch((error: any) => { throw error; });
}

export { loginUser };