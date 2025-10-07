import axios from "axios";

const base_url = "http://careerpoint.duckdns.org/auth/";

const loginUser = async (login: any) => {
  return axios
    .post(`${base_url}login`, login)
    .then((res) => res.data)
    .catch((err) => { throw err; });
};

export { loginUser };
