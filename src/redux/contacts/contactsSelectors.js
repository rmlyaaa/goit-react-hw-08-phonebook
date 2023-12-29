import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterselectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => [
    ...contacts.filter(contact => {
      const hasContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContact;
    }),
  ]
);
