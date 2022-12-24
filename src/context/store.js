import { configureStore } from '@reduxjs/toolkit';
import urlReducer from "../context/features/url/urlSlice";
import passwordReducer from './features/url/passwordSlice';

export const store = configureStore({
  reducer: {
    url: urlReducer,
    password: passwordReducer,
  },
})