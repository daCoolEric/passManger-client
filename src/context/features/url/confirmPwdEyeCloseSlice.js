import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'visible',
}

export const confirmPwdEyeCloseSlice = createSlice({
  name: 'confirmPwdEyeClose',
  initialState,
  reducers: { 
    setConfirmPwdEyeCloseState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setConfirmPwdEyeCloseState } = confirmPwdEyeCloseSlice.actions;



export default confirmPwdEyeCloseSlice.reducer;