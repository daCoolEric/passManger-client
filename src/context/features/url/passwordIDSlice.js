import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const passwordIdSlice = createSlice({
  name: 'passwordId',
  initialState,
  reducers: { 
    setPasswordId: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPasswordId } = passwordIdSlice.actions;



export default passwordIdSlice.reducer;