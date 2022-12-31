import { configureStore } from '@reduxjs/toolkit';
import deleteReducer from './features/url/deleteSlice';
import loaderReducer from './features/url/loaderSlice';
import passwordIDReducer from './features/url/passwordIDSlice';
import accountNameReducer from './features/url/passwordInfoStates/accountNameSlice';
import userNameReducer from './features/url/passwordInfoStates/userNameSlice';
import passwordReducer from './features/url/passwordInfoStates/passwordSlice';
import confirmPasswordReducer from './features/url/passwordInfoStates/confirmPasswordSlice';
import updateReducer from './features/url/updateSlice';
import pwdEyeCloseReducer from './features/url/passwordInfoStates/pwdEyeCloseSlice';
import pwdEyeOpenReducer from './features/url/passwordInfoStates/pwdEyeOpenSlice';
import confirmPwdEyeOpenReducer from './features/url/confirmPwdEyeOpenSlice';
import confirmPwdEyeCloseReducer from './features/url/confirmPwdEyeCloseSlice';
import decryptedPassSliceReducer from './features/url/decryptedPassSlice';
import passwordListSliceReducer from './features/url/PasswordListSlice';
import decryptPassIDSliceReducer from './features/url/decryptPassIDSlice';


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
    pwdEyeClose: pwdEyeCloseReducer,
    pwdEyeOpen: pwdEyeOpenReducer,
    confirmPwdEyeOpen: confirmPwdEyeOpenReducer,
    confirmPwdEyeClose: confirmPwdEyeCloseReducer,
    decryptedPass: decryptedPassSliceReducer,
    passwordList: passwordListSliceReducer,
    decryptPasswordId: decryptPassIDSliceReducer,
  },
})