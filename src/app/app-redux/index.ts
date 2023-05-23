import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../../features/searchbar/model/searchbar-slice'
import { authReducer } from '../../features/userbar/model/login-slice'

export const store = configureStore({
  reducer: {
    searchBar: searchReducer,
    auth: authReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
