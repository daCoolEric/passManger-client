import { configureStore } from '@reduxjs/toolkit';
import urlReducer from "../context/features/url/urlSlice";
import passwordReducer from './features/url/passwordSlice';
import deleteReducer from './features/url/deleteSlice';
import loaderReducer from './features/url/loaderSlice';
import passwordIDReducer from './features/url/passwordIDSlice';


export const store = configureStore({
  reducer: {
    url: urlReducer,
    password: passwordReducer,
    delete: deleteReducer,
    loader: loaderReducer,
    passwordId: passwordIDReducer,
  },
})