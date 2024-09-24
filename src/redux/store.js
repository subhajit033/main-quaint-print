import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.slice';
import cartSlice from './cart.slice';
import productSlice from './productDetails.slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
