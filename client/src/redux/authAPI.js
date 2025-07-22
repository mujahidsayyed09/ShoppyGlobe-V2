import axios from "axios";

const API = "http://localhost:5100/api/auth";

export const register = async (userData) => {
  const res = await axios.post(`${API}/register`, userData);
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post(`${API}/login`, userData);
  return res.data;
};
