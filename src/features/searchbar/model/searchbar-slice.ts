import { createSlice } from '@reduxjs/toolkit'
import { InitNavModule } from '../config/types'
const initialState: InitNavModule = {
  isOpenSearch: false,
  isOpenHistory: false,
  recentViews: [],
}
const navModuleSlice = createSlice({
  name: 'nav-module',
  initialState,
  reducers: {
    setSearchState: (state) => {
      if (state.isOpenHistory) {
        state.isOpenHistory = false
      }
      state.isOpenSearch = !state.isOpenSearch
    },
    setHistoryState: (state) => {
      state.isOpenHistory = !state.isOpenHistory
    },
  },
  extraReducers: {},
})
export const searchReducer = navModuleSlice.reducer
export const searchActions = navModuleSlice.actions
