import { configureStore } from '@reduxjs/toolkit';
import urlReducer from "../context/features/url/urlSlice";
import passwordReducer from './features/url/passwordSlice';
import deleteReducer from './features/url/deleteSlice';
import loaderReducer from './features/url/loaderSlice';


export const store = configureStore({
  reducer: {
    url: urlReducer,
    password: passwordReducer,
    delete: deleteReducer,
    loader: loaderReducer,
  },
})