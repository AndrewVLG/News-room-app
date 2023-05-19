import * as RTK from '@reduxjs/toolkit'
import LocalStorageAuth, {
  Response,
} from '../../../shared/lib/local-storage-auth/local-storage-auth'
interface User {
  login: string | null
  password: string | null
  rememberUser: boolean
}
export const makeAuth = RTK.createAsyncThunk(
  'login-slice/makeAuth',
  async ({ login, password, rememberUser }: User) => {
    const response: Response = await new LocalStorageAuth(false).authorization(
      login,
      password,
    )
    if (typeof response.t === 'string' && rememberUser) {
      localStorage.setItem('token', response.t)
    }
    if (typeof response.t === 'string' && !rememberUser) {
      sessionStorage.setItem('token', response.t)
    }

    return response
  },
)
export const authMe = RTK.createAsyncThunk('login-slice/authMe', async () => {
  if (sessionStorage.getItem('token')) {
    return await new LocalStorageAuth(false).authMe(
      sessionStorage.getItem('token') as string,
    )
  }
  return await new LocalStorageAuth(false).authMe(
    localStorage.getItem('token') as string,
  )
})
interface Init {
  isLoading: boolean
  login: string | null
  password: string | null
  error: string | null
  authComplete: boolean
}
const initialState: Init = {
  isLoading: false,
  login: '',
  password: '',
  error: '',
  authComplete: false,
}
const loginSlice = RTK.createSlice({
  name: 'login-slice',
  initialState,
  reducers: {
    writeLogin: (state, action: RTK.PayloadAction<string>) => {
      state.login = action.payload
    },
    writePassword: (state, action: RTK.PayloadAction<string>) => {
      state.password = action.payload
    },
    clearError: (state) => {
      state.error = null
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

    builder.addCase(authMe.fulfilled, (state) => {
      state.authComplete = true
    })

    builder.addCase(authMe.rejected, (state) => {
      state.authComplete = false
    })
  },
})
export const AuthReducer = loginSlice.reducer
export const loginActions = loginSlice.actions
