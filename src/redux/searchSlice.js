// searchSlice.js - Manages search/filter state using Redux
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '', // Current search query string
  },
  reducers: {
    // Action: Update search query
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export const selectSearchQuery = (state) => state.search.query;

export default searchSlice.reducer;