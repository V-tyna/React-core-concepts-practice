import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import cartSlice from './cartSlice';
import counterSlice from './counterSlice';
import shopSlice from './shopSlice';
import uiSlice from './uiSlice';

const store = configureStore({
	reducer: {
    cart: cartSlice,
		counterReducer: counterSlice,
		authReducer: authSlice,
		shop: shopSlice,
    ui: uiSlice,
	},
});

export default store;
