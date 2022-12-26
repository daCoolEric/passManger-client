import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const userNameSlice = createSlice({
  name: 'userName',
  initialState,
  reducers: { 
    setUserNameState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserNameState } = userNameSlice.actions;



export default userNameSlice.reducer;