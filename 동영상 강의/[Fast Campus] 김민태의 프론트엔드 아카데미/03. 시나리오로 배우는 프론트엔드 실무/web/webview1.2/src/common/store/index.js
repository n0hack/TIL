import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product';
import configReducer from './features/config';


export const store = configureStore({
  reducer: {
    product: productReducer,
    config: configReducer,
  },
});
