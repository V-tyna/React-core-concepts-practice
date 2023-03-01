import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import counterSlice from './counterSlice';

const store = configureStore({ reducer: { counterReducer: counterSlice, authReducer: authSlice } });

export default store;
