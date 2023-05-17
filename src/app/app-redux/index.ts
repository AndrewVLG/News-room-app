import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../../features/searchbar/model/searchbar-slice'

export const store = configureStore({
  reducer: {
    searchBar: searchReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
