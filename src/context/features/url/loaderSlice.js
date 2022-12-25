import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'hidden',
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: { 
    setLoaderState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoaderState } = loaderSlice.actions;

export default loaderSlice.reducer;