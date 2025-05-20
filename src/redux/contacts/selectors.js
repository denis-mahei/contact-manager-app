import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors.js';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) || number.includes(filter)
    );
  }
);
