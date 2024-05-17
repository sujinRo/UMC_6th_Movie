import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export const postJoin = async info => {
  const response = await axios.post(`${API_URL}auth/signup`, info.formData);
  return response.data;
};

export const postLogin = async info => {
  const response = await axios.post(`${API_URL}auth/login`, info.formData);
  return response.data;
};
