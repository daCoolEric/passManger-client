import { configureStore } from '@reduxjs/toolkit';
import urlReducer from "../context/features/url/urlSlice";

export const store = configureStore({
  reducer: {
    url: urlReducer,
  },
})