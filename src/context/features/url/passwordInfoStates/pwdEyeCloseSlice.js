import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'visible',
}

export const pwdEyeCloseSlice = createSlice({
  name: 'pwdEyeClose',
  initialState,
  reducers: { 
    setPwdEyeCloseState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPwdEyeCloseState } = pwdEyeCloseSlice.actions;



export default pwdEyeCloseSlice.reducer;