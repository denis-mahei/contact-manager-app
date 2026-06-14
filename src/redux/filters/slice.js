import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    nameFilter: '',
    typeFilter: 'all',
  },

  reducers: {
    changeNameFilter: ( state, action ) => {
      state.nameFilter = action.payload;
    },
    changeTypeFilter: ( state, action ) => {
      state.typeFilter = action.payload;
    }
  },
});

export const { changeNameFilter, changeTypeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
