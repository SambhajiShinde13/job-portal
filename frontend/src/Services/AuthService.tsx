import axios from "axios";

const base_url = process.env.REACT_APP_API_URL;

const loginUser = async (login: any) => {
  return axios
    .post(`${base_url}login`, login)
    .then((res) => res.data)
    .catch((err) => { throw err; });
};

export { loginUser };
