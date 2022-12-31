import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const decrytPasswordIdSlice = createSlice({
  name: 'decrytPasswordId',
  initialState,
  reducers: { 
    setDecrytPasswordId: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDecrytPasswordId } = decrytPasswordIdSlice.actions;



export default decrytPasswordIdSlice.reducer;