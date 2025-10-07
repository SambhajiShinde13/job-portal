 import axiosInstance from "../Interceptor/AxiosInterceptor";

// Register new user
const registerUser = async (user: any) => {
  return axiosInstance
    .post(`/users/register`, user)
    .then((res) => res.data)
    .catch((err) => { throw err; });
};

// Login user (optional, if using /auth/login instead)
const loginUser = async (login: any) => {
  return axiosInstance
    .post(`/users/login`, login)
    .then((res) => res.data)
    .catch((err) => { throw err; });
};

// Send OTP for password reset
const sendOtp = async (email: string) => {
  return axiosInstance
    .post(`/users/sendOtp/${email}`)
    .then((res) => res.data)
    .catch((err) => { throw err; });
};

// Verify OTP
const verifyOtp = async (email: string, otp: string) => {
  return axiosInstance
    .get(`/users/verifyOtp/${email}/${otp}`)
    .then((res) => res.data)
    .catch((err) => { throw err; });
};

// Reset password
const resetPassword = async (email: string, password: string) => {
  return axiosInstance
    .post(`/users/changePass`, { email, password })
    .then((res) => res.data)
    .catch((err) => { throw err; });
};

export { registerUser, loginUser, sendOtp, verifyOtp, resetPassword };
