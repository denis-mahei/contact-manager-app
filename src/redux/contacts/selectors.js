import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectTypeFilter } from '../filters/selectors.js';

export const selectContacts = (state) => state.contacts.items;
export const selectTotalPages = (state) => state.contacts.totalPages;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFavouriteContacts = createSelector(
  [selectContacts],
  (contacts) => {
    return contacts.filter((contact) => contact.isFavourite);
  }
);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectTypeFilter],
  (contacts, nameFilter, typeFilter) => {
    const normalizedFilter = nameFilter?.toLowerCase() || '';
    return contacts.filter((contact) => {
      const matchesName = contact.name.toLowerCase().includes(normalizedFilter);
      const matchesType =
        typeFilter === 'all' ? true : contact.contactType === typeFilter;

      return matchesName && matchesType;
    });
  }
);
