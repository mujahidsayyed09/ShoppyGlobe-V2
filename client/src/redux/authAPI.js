import axios from "axios";
import { BASE_URL } from "../../config";

const API = `${BASE_URL}/api/auth`;

export const register = async (userData) => {
  const res = await axios.post(`${API}/register`, userData);
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post(`${API}/login`, userData);
  return res.data;
};
