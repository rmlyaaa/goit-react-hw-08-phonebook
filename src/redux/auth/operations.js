import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistorToken = state.auth.token;
    if (persistorToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    setAuthToken(persistorToken);
    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
