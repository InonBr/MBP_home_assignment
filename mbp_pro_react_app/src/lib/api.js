import { registerUrl, loginUrl } from './url';
const axios = require('axios');

const registerApi = (obj) => {
  return axios.post(registerUrl, obj);
};

const loginApi = (obj) => {
  return axios.post(loginUrl, obj);
};

export { registerApi, loginApi };
