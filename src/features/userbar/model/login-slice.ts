import * as RTK from '@reduxjs/toolkit'
import LocalStorageAuth from '../../../shared/lib/local-storage-auth/local-storage-auth'
import { Response } from '../../../shared/lib/local-storage-auth/types'
interface User {
  login: string | null
  password: string | null
}
export const makeAuth = RTK.createAsyncThunk(
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
  isLoading: boolean
  login: string | null
  password: string | null
  error: string | null
  authComplete: boolean
  rememberUser: boolean
}
const initialState: Init = {
  isLoading: false,
  login: '',
  password: '',
  error: '',
  authComplete: false,
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
      state.error = null
    },
    setRemember: (state, action: RTK.PayloadAction<boolean>) => {
      state.rememberUser = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      makeAuth.fulfilled,
      (state, action: RTK.PayloadAction<Response>) => {
        state.error = null
        state.authComplete = action.payload.isAuth
        state.isLoading = false
      },
    )

    builder.addCase(makeAuth.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    builder.addCase(makeAuth.rejected, (state) => {
      state.error = 'Неверный логин или пароль'
      state.isLoading = false
    })
  },
})
export const authReducer = loginSlice.reducer
export const loginActions = loginSlice.actions
