import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsAPI from '../../service/api.js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async ( _, thunkAPI ) => {
    try {
      const { data } = await contactsAPI.get('/contacts');

      return data.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ( newContact, thunkAPI ) => {
    try {
      const response = await contactsAPI.post('/contacts', newContact);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ( id, thunkAPI ) => {
    try {
      await contactsAPI.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);


export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ( { id, contact }, thunkAPI ) => {
    try {
      const response = await contactsAPI.patch(`/contacts/${id}`, contact);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
