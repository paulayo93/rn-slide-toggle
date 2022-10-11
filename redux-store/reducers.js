
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state, action) => {

      if (action.payload) {
        state.mode = 'light'
      } else {
        state.mode = 'dark'
      }
    },
  },
})
export const { changeMode } = themeSlice.actions 

export default themeSlice.reducer