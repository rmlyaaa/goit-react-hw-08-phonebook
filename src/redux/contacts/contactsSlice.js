import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  featchContacts,
  updateContacts,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(featchContacts.pending, handlePending)
      .addCase(featchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(featchContacts.rejected, handleReject)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContacts.rejected, handleReject)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContacts.rejected, handleReject)
      .addCase(updateContacts.pending, handlePending)
      .addCase(updateContacts.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateContacts.rejected, handleReject);
  },
});

export const contactsReducer = contactsSlice.reducer;
