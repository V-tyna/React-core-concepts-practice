import { createSlice } from '@reduxjs/toolkit';

const initialShopState = {
  products: [],
}

const shopSlice = createSlice({
  name: 'shop',
  initialState: initialShopState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products;
    }
  }
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;