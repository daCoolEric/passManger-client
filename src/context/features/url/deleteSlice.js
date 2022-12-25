import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'hidden',
}

export const deleteSlice = createSlice({
  name: 'delete',
  initialState,
  reducers: { 
    setDeleteState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDeleteState } = deleteSlice.actions;



export default deleteSlice.reducer;