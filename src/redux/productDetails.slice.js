import { createSlice } from '@reduxjs/toolkit';

const productDetails = createSlice({
  name: 'product',
  initialState: {
    productDetails: {
      artType: 'Lorem Ipsum',
      marketPrice: '600',
      ourPrice: '300',
      size: '12 x 14',
    },
  },
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const { setProductDetails } = productDetails.actions;

export default productDetails.reducer;
