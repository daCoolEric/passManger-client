import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const decryptedPassSlice = createSlice({
  name: 'decryptedPass',
  initialState,
  reducers: { 
    setDecryptedPass: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDecryptedPass } = decryptedPassSlice.actions;



export default decryptedPassSlice.reducer;