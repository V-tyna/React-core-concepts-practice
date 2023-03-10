import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cart: [],
  changed: false
};

const cartSlice = createSlice({
  name: 'shop',
  initialState: initialCartState,
  reducers: {
    getCartData(state, action) {
      state.cart = action.payload.cart;
    },
    addToCart(state, action) {
      const item = action.payload.item;
      const existedProduct = state.cart.find(prod => prod.id === item.id);
      if (!existedProduct) {
        state.cart.push({
          id: item.id,
          title: item.title,
          price: item.price,
          total: +item.price,
          quantity: 1,
        });
      } else {
        existedProduct.quantity++;
        existedProduct.total = existedProduct.total + item.price;
      }
      state.changed = true;
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const existedProduct = state.cart.find(prod => prod.id === id);
      if (existedProduct.quantity === 1) {
        state.cart = state.cart.filter(prod => prod.id !== id);
      } else {
        existedProduct.quantity--;
        existedProduct.total = existedProduct.total - existedProduct.price;
      }
      state.changed = true;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;