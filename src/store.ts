import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './Features/alert/alertSlice'
import productReducer from './Features/products/productSlice';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    products: productReducer
  },
});
