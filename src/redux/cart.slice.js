import CartItem from '@/shared/cards/CartItem';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    setCartItem: (state, action) => {
      state.cartItem.push(action.payload);
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.cartItem.find((item) => item._id === _id);
      if (item) {
        item.quantity = quantity;
      }
    },
    deleteCartItem: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (cart) => cart._id !== action.payload
      );
    },
  },
});

export const { setCartItem, deleteCartItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
