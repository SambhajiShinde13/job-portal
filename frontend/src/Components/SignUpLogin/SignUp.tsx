import { Button, LoadingOverlay, PasswordInput, Radio, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { errorNotification, successNotification } from "../../Services/NotificationService";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
  });
  const [errors, setErrors] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    if (typeof e === "string") {
      setData({ ...data, accountType: e });
      return;
    }
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Simple validation
    setErrors((prev) => ({
      ...prev,
      [name]: value ? "" : `${name} is required`,
      ...(name === "password" && data.confirmPassword && { confirmPassword: value !== data.confirmPassword ? "Passwords do not match" : "" }),
      ...(name === "confirmPassword" && { confirmPassword: value !== data.password ? "Passwords do not match" : "" }),
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    let valid = true;
    const newErrors: any = {};
    Object.keys(data).forEach((key) => {
      if (!data[key]) { newErrors[key] = `${key} is required`; valid = false; }
    });
    if (data.password !== data.confirmPassword) { newErrors.confirmPassword = "Passwords do not match"; valid = false; }
    setErrors(newErrors);
    if (!valid) return;

    try {
      setLoading(true);
      await registerUser(data);
      successNotification("Registered Successfully", "Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      errorNotification("Registration Failed", err.response?.data?.errorMessage || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />
      <h2 className="text-2xl font-semibold mb-4">Create Account</h2>

      <TextInput
        label="Full Name"
        placeholder="Your name"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
        withAsterisk
      />
      <TextInput
        label="Email"
        placeholder="Your email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        icon={<IconAt size={16} />}
        withAsterisk
        mt="sm"
      />
      <PasswordInput
        label="Password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
       leftSection={<IconLock size={16} />}
        withAsterisk
        mt="sm"
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        leftSection={<IconAt size={16} />}
        withAsterisk
        mt="sm"
      />

      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are?"
        withAsterisk
        mt="sm"
      >
        <div className="flex gap-4 mt-2">
          <Radio value="APPLICANT" label="Applicant" />
          <Radio value="EMPLOYER" label="Employer" />
        </div>
      </Radio.Group>

      <Button fullWidth mt="md" onClick={handleSubmit} loading={loading}>
        Sign Up
      </Button>

      <div className="text-center mt-4">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>
          Login
        </span>
      </div>
    </div>
  );
};

export default SignUp;
