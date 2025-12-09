import axiosInstance from "../Interceptor/AxiosInterceptor";

const loginUser = async (login: any) => {
  const res = await axiosInstance.post("/users/login", login);  // ✅ correct endpoint
  return res.data;                                              // user JSON from backend
};

export { loginUser };