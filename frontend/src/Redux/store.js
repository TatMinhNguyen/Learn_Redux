import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlide'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})