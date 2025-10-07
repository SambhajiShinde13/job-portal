import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/AuthService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";
import { setJwt } from "../../Slices/JwtSlice";
import jwtDecode from "jwt-decode";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    // Basic frontend validation
    let valid = true;
    let newErrors: any = {};
    if (!data.email) { newErrors.email = "Email required"; valid = false; }
    if (!data.password) { newErrors.password = "Password required"; valid = false; }
    setErrors(newErrors);
    if (!valid) return;

    try {
      setLoading(true);
      const res = await loginUser(data);
      // Save JWT
      localStorage.setItem("token", res.jwt);
      dispatch(setJwt(res.jwt));

      const decoded: any = jwtDecode(res.jwt);
      dispatch(setUser({ ...decoded, email: decoded.sub }));

      successNotification("Login Successful", "Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (err: any) {
      errorNotification("Login Failed", err.response?.data?.errorMessage || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <TextInput
        label="Email"
        placeholder="Your email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        icon={<IconAt size={16} />}
        withAsterisk
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
        icon={<IconLock size={16} />}
        withAsterisk
        mt="sm"
      />
      <Button fullWidth mt="md" onClick={handleSubmit} loading={loading}>
        Login
      </Button>
      <div className="text-center mt-4">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
