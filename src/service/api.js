import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export default contactsAPI;

export const setAuthHeader = ( token ) => {
  contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete contactsAPI.defaults.headers.common.Authorization;
};
