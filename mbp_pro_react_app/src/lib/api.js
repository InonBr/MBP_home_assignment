import { registerUrl, loginUrl, stockUrl } from './url';
const axios = require('axios');

const registerApi = (obj) => {
  return axios.post(registerUrl, obj);
};

const loginApi = (obj) => {
  return axios.post(loginUrl, obj);
};

const getStocksApi = () => {
  return axios.get(stockUrl);
};

export { registerApi, loginApi, getStocksApi };
