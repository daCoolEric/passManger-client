import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const confirmPasswordSlice = createSlice({
  name: 'confirmPassword',
  initialState,
  reducers: { 
    setConfirmPasswordState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setConfirmPasswordState } = confirmPasswordSlice.actions;



export default confirmPasswordSlice.reducer;