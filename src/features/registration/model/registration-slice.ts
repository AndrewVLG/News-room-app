import * as RTK from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import LocalStorageAuth from '../../../shared/lib/local-storage-auth/local-storage-auth'
import { User } from '../../../shared/lib/local-storage-auth/types'
import { InitialState, InputStatus, Request } from './types'

const fakeApi = new LocalStorageAuth()
const initialState: InitialState = {
  message: null,
  isLoading: false,
  isSuccess: false,
  loginValue: null,
  passwordValue: null,
  birthDay: null,
  confirmValue: null,
  buttonIsActive: false,
}
export const sendRegData = RTK.createAsyncThunk(
  'sendRegData',
  async (data: User) => {
    await fakeApi
      .registration(data)
      .then(() => console.log('Регистрация выполнена'))
      .then(() => console.log('Пользователь с таким логином существует'))
  },
)
const registrationSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {
    setLoginValue: (state, action: RTK.PayloadAction<string | null>) => {
      state.loginValue = action.payload
    },
    setPasswordValue: (state, action: RTK.PayloadAction<string | null>) => {
      state.passwordValue = action.payload
    },
    setConfirmValue: (state, action: RTK.PayloadAction<string | null>) => {
      state.confirmValue = action.payload
    },
    setBirthDayValue: (state, action: RTK.PayloadAction<string | null>) => {
      state.birthDay = action.payload
    },
    setButtonState: (state, action: RTK.PayloadAction<boolean>) => {
      state.buttonIsActive = action.payload
    },
    clearError: (state) => {
      state.message = null
    },
  },
  extraReducers: (build) => {
    build.addCase(sendRegData.pending, (state) => {
      state.isSuccess = false
      state.isLoading = true
    })
    build.addCase(sendRegData.fulfilled, (state) => {
      state.message = 'Регистрация выполнена успешно'
      state.isSuccess = true
      state.isLoading = false
    })
    build.addCase(sendRegData.rejected, (state) => {
      state.message = 'Пользователь с таким логином существует'
      state.isSuccess = false
      state.isLoading = false
    })
  },
})
export const regReducer = registrationSlice.reducer
export const regActions = registrationSlice.actions
