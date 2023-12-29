import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const featchContacts = createAsyncThunk(
  'contacts/featchContacts',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/contacts', credentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkApi) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateContacts',
  async ({ contactId, credentials }, thunkApi) => {
    try {
      const res = await axios.patch(`/contacts/${contactId}`, credentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
