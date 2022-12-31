import { createSlice } from '@reduxjs/toolkit'

const initialState={

}

export const passwordListSlice = createSlice({
  name: 'passwordList',
  initialState,
  reducers: { 
    setPasswordListState: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPasswordListState } = passwordListSlice.actions;



export default passwordListSlice.reducer;