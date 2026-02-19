import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product, CartState } from './types';

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; qty: number }>) => {
      const { product, qty } = action.payload;
      const existing = state.items.find(item => item.product.id === product.id);
      if (existing) {
        existing.qty += qty;
      } else {
        state.items.push({ product, qty });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const { id, qty } = action.payload;
      const index = state.items.findIndex(item => item.product.id === id);
      if (index !== -1) {
        const item = state.items[index];
        if (item.qty > qty) {
          item.qty -= qty;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;