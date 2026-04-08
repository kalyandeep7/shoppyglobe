// cartSlice.js - Manages cart state using Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of cart items
  },
  reducers: {
    // Action: Add product to cart or increase quantity if already exists
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Action: Remove product from cart completely
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Action: Increase quantity of a cart item
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    // Action: Decrease quantity but not below 1
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    // Action: Clear entire cart (used after order placed)
    clearCart: (state) => {
      state.items = [];
    },
  },
});