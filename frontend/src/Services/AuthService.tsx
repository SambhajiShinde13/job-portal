import axios from "axios";
import API_BASE_URL from './config';

const base_url = API_BASE_URL;

const loginUser = async (login: any) => {
  return axios
    .post(`${base_url}login`, login)
    .then((res) => res.data)
    .catch((err) => { throw err; });
};

export { loginUser };
