import axiosInstance from "../Interceptor/AxiosInterceptor";

export interface LoginPayload {
  email: string;
  password: string;
}

const loginUser = async (login: LoginPayload) => {
  const res = await axiosInstance.post("/users/login", login); // ✅ correct path
  return res.data; // backend returns { id, name, email, profileId, ... }
};

export { loginUser };
