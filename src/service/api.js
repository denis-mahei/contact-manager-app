import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export default contactsAPI;

export const setAuthHeader = (token) => {
  contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete contactsAPI.defaults.headers.common.Authorization;
};
