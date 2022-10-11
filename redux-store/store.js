
import themeReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
      theme: themeReducer,
    },
  })

export default store;
