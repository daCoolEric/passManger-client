import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const accountTypeSlice = createSlice({
  name: 'accountType',
  initialState,
  reducers: { 
    setAccountTypeState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAccountTypeState } = accountTypeSlice.actions;



export default accountTypeSlice.reducer;