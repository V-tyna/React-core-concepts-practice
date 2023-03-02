import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
  cartIsVisible: false,
  notification: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {...action.payload}
    },
    clearNotification(state) {
      state.notification = null;
    }
  }
});

export const uiCartActions = uiSlice.actions;

export default uiSlice.reducer;