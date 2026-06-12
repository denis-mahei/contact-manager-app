import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsAPI, { clearAuthHeader, setAuthHeader } from '../../service/api.js';

export const register = createAsyncThunk(
  '/auth/register',
  async ( credential, thunkAPI ) => {
    try {
      const res = await contactsAPI.post('/auth/register', credential);
      setAuthHeader(res.data.data.accessToken);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async ( credential, thunkAPI ) => {
    try {
      const res = await contactsAPI.post('/auth/login', credential);
      setAuthHeader(res.data.data.accessToken);
      return res.data;
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
      const res = await contactsAPI.get('/auth/me');
      return res.data;
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
      const res = await contactsAPI.get('/auth/get-oauth-url');
      return res.data.data.url;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const confirmGoogleOAuth = createAsyncThunk(
  'auth/confirm-oauth',
  async ( code, thunkAPI ) => {
    try {
      const res = await contactsAPI.post('/auth/confirm-oauth', { code });
      const token = res.data.data.accessToken;
      setAuthHeader(token);

      return {
        token,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);