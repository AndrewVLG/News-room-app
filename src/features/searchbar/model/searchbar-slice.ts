import * as RTK from '@reduxjs/toolkit'
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
    setSearchState: (state, action: RTK.PayloadAction<boolean>) => {
      state.isOpenSearch = !state.isOpenSearch
    },
    setHistoryState: (state, action: RTK.PayloadAction<boolean>) => {
      state.isOpenHistory = !state.isOpenHistory
    },
  },
  extraReducers: {},
})
export const searchReducer = navModuleSlice.reducer
export const searchActions = navModuleSlice.actions
