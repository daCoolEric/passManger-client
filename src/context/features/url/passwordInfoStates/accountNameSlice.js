import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const accountNameSlice = createSlice({
  name: 'accountName',
  initialState,
  reducers: { 
    setAccountNameState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAccountNameState } = accountNameSlice.actions;



export default accountNameSlice.reducer;