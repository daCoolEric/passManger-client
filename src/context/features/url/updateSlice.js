import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'hidden',
}

export const updateSlice = createSlice({
  name: 'update',
  initialState,
  reducers: { 
    setUpdateState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUpdateState } = updateSlice.actions;



export default updateSlice.reducer;