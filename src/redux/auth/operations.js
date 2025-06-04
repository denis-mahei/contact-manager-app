import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsAPI, {
  clearAuthHeader,
  setAuthHeader,
} from '../../service/api.js';

export const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const res = await contactsAPI.post('/users/signup', credential);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const res = await contactsAPI.post('/users/login', credential);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await contactsAPI.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.token);
    const res = await contactsAPI.get('/users/current');
    return res.data;
  },
  {
    condition: (_, { getState }) => {
      const token = getState().auth.token;
      return Boolean(token);
    },
  }
);
