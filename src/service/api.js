import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default contactsAPI;

export const setAuthHeader = ( token ) => {
  contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete contactsAPI.defaults.headers.common.Authorization;
};

export const requestResetEmail = ( email ) =>
  contactsAPI.post('/auth/send-reset-email', { email });

export const resetPassword = ( email ) =>
  contactsAPI.post('/auth/reset-pwd', { email });