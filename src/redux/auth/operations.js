import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsAPI, { clearAuthHeader, setAuthHeader } from '../../service/api.js';

export const register = createAsyncThunk(
  '/auth/register',
  async ( credential, thunkAPI ) => {
    try {
      const { data } = await contactsAPI.post('/auth/register', credential);
      setAuthHeader(data.data.accessToken);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async ( credential, thunkAPI ) => {
    try {
      const { data } = await contactsAPI.post('/auth/login', credential);
      setAuthHeader(data.data.accessToken);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async ( _, thunkAPI ) => {
  try {
    await contactsAPI.post('/auth/logout');
    clearAuthHeader();
  } catch (e) {
    clearAuthHeader();
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/me',
  async ( _, thunkAPI ) => {
    try {
      const { data } = await contactsAPI.get('/auth/me');
      return data;
    } catch (e) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(e.message);
    }
  },
  {
    condition: ( _, { getState } ) => {
      const token = getState().auth.token;
      return Boolean(token);
    },
  },
);

export const getGoogleAuthUrl = createAsyncThunk(
  '/auth/get-oauth-url',
  async ( _, thunkAPI ) => {
    try {
      const { data } = await contactsAPI.get('/auth/get-oauth-url');
      return data.data.url;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const confirmGoogleOAuth = createAsyncThunk(
  'auth/confirm-oauth',
  async ( code, thunkAPI ) => {
    try {
      const { data } = await contactsAPI.post('/auth/confirm-oauth', { code });
      const token = data.data.accessToken;
      setAuthHeader(token);

      return {
        token,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const sendResetEmail = createAsyncThunk(
  'auth/send-reset-email',
  async ( email, thunkAPI ) => {
    try {
      const { data } = await contactsAPI.post('/auth/send-reset-email', { email });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async ( payload, thunkAPI ) => {
    try {
      const { data } = await contactsAPI.post('/auth/reset-pwd', payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);