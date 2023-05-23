import * as RTK from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { InitialState, InputStatus, REDUCERS, Request } from './types'

const initialState: InitialState = {
  loginValue: null,
  passwordValue: null,
  birthDay: null,
  confirmValue: null,
  buttonIsActiv: false,
  passwordStatus: [InputStatus.warning, InputStatus.warning],
  confirmStatus: InputStatus.warning,
}
export const sendRegData = RTK.createAsyncThunk(
  REDUCERS.sendRegData,
  async () => {
    console.log('data sent')
  },
)
const registrationSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {
    [REDUCERS.setLoginValue]: (
      state,
      action: RTK.PayloadAction<string | null>,
    ) => {
      state.loginValue = action.payload
    },
    [REDUCERS.setPasswordValue]: (
      state,
      action: RTK.PayloadAction<string | null>,
    ) => {
      state.passwordValue = action.payload
    },
    [REDUCERS.setConfirmValue]: (
      state,
      action: RTK.PayloadAction<string | null>,
    ) => {
      state.confirmValue = action.payload
    },
    [REDUCERS.setBirthDayValue]: (
      state,
      action: RTK.PayloadAction<string | null>,
    ) => {
      state.birthDay = action.payload
    },
    [REDUCERS.setConfirmStatus]: (
      state,
      action: RTK.PayloadAction<InputStatus>,
    ) => {
      state.confirmStatus = action.payload
    },
    [REDUCERS.setPasswordStatus]: (
      state,
      action: RTK.PayloadAction<InputStatus[]>,
    ) => {
      state.passwordStatus = action.payload
    },
    [REDUCERS.sendData]: (state, action: RTK.PayloadAction<Request>) => {
      console.log(`send: ${action.payload}`)
    },
    [REDUCERS.setButtonState]: (state, action: RTK.PayloadAction<boolean>) => {
      state.buttonIsActiv = action.payload
    },
  },
})
export const regReducer = registrationSlice.reducer
export const regActions = registrationSlice.actions
