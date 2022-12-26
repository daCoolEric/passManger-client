import { configureStore } from '@reduxjs/toolkit';
import deleteReducer from './features/url/deleteSlice';
import loaderReducer from './features/url/loaderSlice';
import passwordIDReducer from './features/url/passwordIDSlice';
import accountNameReducer from './features/url/passwordInfoStates/accountNameSlice';
import userNameReducer from './features/url/passwordInfoStates/userNameSlice';
import passwordReducer from './features/url/passwordInfoStates/passwordSlice';
import confirmPasswordReducer from './features/url/passwordInfoStates/confirmPasswordSlice';
import updateReducer from './features/url/updateSlice';


export const store = configureStore({
  reducer: {
    delete: deleteReducer,
    loader: loaderReducer,
    passwordId: passwordIDReducer,
    accountName: accountNameReducer,
    userName: userNameReducer,
    password: passwordReducer,
    confirmPassword: confirmPasswordReducer,
    update: updateReducer,

    
  },
})