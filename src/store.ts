import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/useUser'

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>