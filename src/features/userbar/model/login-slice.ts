import * as RTK from '@reduxjs/toolkit'
import LocalStorageAuth from '../../../shared/lib/local-storage-auth/local-storage-auth'
import { Response } from '../../../shared/lib/local-storage-auth/types'
interface User {
  login: string | null
  password: string | null
}
export const makeLogin = RTK.createAsyncThunk(
  'login-slice/makeAuth',
  async ({ login, password }: User) => {
    const response: Response = await new LocalStorageAuth().authorization(
      login,
      password,
    )

    return response
  },
)

interface Init {
  token: string | null
  isLoading: boolean
  login: string | null
  password: string | null
  message: string | null
  loginCompleted: boolean
  rememberUser: boolean
}
const initialState: Init = {
  token: null,
  isLoading: false,
  login: '',
  password: '',
  message: null,
  loginCompleted: false,
  rememberUser: false,
}
const loginSlice = RTK.createSlice({
  name: 'login-slice',
  initialState,
  reducers: {
    writeAuthLogin: (state, action: RTK.PayloadAction<string>) => {
      state.login = action.payload
    },
    writeAuthPassword: (state, action: RTK.PayloadAction<string>) => {
      state.password = action.payload
    },
    clearError: (state) => {
      state.message = null
    },
    setRemember: (state, action: RTK.PayloadAction<boolean>) => {
      state.rememberUser = action.payload
    },
    logout: (state) => {
      state.loginCompleted = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      makeLogin.fulfilled,
      (state, action: RTK.PayloadAction<Response>) => {
        state.token = action.payload.t
        state.message = 'Вход выполнен успешно!'
        state.loginCompleted = action.payload.isAuth
        state.isLoading = false
      },
    )

    builder.addCase(makeLogin.pending, (state) => {
      state.isLoading = true
      state.message = null
    })

    builder.addCase(makeLogin.rejected, (state) => {
      state.message = 'Неверный логин или пароль'
      state.isLoading = false
    })
  },
})
export const authReducer = loginSlice.reducer
export const loginActions = loginSlice.actions
