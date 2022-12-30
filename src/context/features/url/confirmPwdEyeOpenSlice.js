import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'hidden',
}

export const confirmPwdEyeOpenSlice = createSlice({
  name: 'confirmPwdEyeOpen',
  initialState,
  reducers: { 
    setConfirmPwdEyeOpenState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setConfirmPwdEyeOpenState } = confirmPwdEyeOpenSlice.actions;



export default confirmPwdEyeOpenSlice.reducer;