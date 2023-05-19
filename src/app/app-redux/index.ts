import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../../features/searchbar/model/searchbar-slice'
import { AuthReducer } from '../../features/userbar/model/login-slice'

export const store = configureStore({
  reducer: {
    searchBar: searchReducer,
    auth: AuthReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
