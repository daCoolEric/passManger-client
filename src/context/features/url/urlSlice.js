import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: { 
    setUrlParam: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUrlParam } = urlSlice.actions;

// Thunk
export const setParamAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch((amount))
  }, 1000)
}


export default urlSlice.reducer;