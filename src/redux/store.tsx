import { configureStore } from '@reduxjs/toolkit';
import visibilityReducer from './visibilitySlice';

export const store = configureStore({
  reducer: {
    visibility: visibilityReducer
  }
});
