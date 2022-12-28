import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'hidden',
}

export const pwdEyeOpenSlice = createSlice({
  name: 'pwdEyeOpen',
  initialState,
  reducers: { 
    setPwdEyeOpenState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPwdEyeOpenState } = pwdEyeOpenSlice.actions;



export default pwdEyeOpenSlice.reducer;