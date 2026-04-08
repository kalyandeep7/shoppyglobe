// store.js - Redux store combining cart and search reducers
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,   // Cart state
    search: searchReducer, // Search state
  },
});

export default store;