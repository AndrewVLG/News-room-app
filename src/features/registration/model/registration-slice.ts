import * as RTK from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import LocalStorageAuth from '../../../shared/lib/local-storage-auth/local-storage-auth'
import { User } from '../../../shared/lib/local-storage-auth/types'
import { InitialState, InputStatus, Request } from './types'

const fakeApi = new LocalStorageAuth()
const initialState: InitialState = {
  loginValue: null,
  passwordValue: null,
  birthDay: null,
  confirmValue: null,
  buttonIsActive: false,
  passwordStatus: [InputStatus.warning, InputStatus.warning],
  confirmStatus: InputStatus.warning,
}
export const sendRegData = RTK.createAsyncThunk(
  'sendRegData',
  async (data: User) => {
    fakeApi
      .registration(data)
      .then((data) => console.log('Регистрация выполнена'))
      .then((e) => console.log('Пользователь с таким логином существует'))
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
    setConfirmStatus: (state, action: RTK.PayloadAction<InputStatus>) => {
      state.confirmStatus = action.payload
    },
    setPasswordStatus: (state, action: RTK.PayloadAction<InputStatus[]>) => {
      state.passwordStatus = action.payload
    },
    sendData: (state, action: RTK.PayloadAction<Request>) => {
      console.log('afgegt')
    },
    setButtonState: (state, action: RTK.PayloadAction<boolean>) => {
      state.buttonIsActive = action.payload
    },
  },
})
export const regReducer = registrationSlice.reducer
export const regActions = registrationSlice.actions
