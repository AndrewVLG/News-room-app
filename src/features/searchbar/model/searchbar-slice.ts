import { createSlice } from '@reduxjs/toolkit'
import { InitNavModule } from '../config/types'
const initialState: InitNavModule = {
  isOpenSearch: false,
  recentViews: [],
}
const navModuleSlice = createSlice({
  name: 'nav-module',
  initialState,
  reducers: {
    setSearch: (state) => {
      state.isOpenSearch = !state.isOpenSearch
    },
  },
  extraReducers: {},
})
export const searchReducer = navModuleSlice.reducer
export const searchActions = navModuleSlice.actions
