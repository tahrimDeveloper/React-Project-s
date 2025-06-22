import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import canvasSlice from './Canvas/canvasSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    canvas: canvasSlice,
  },
});
