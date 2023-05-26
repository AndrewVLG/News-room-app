import * as R from 'redux'
import { RootState } from '..'

export const localStorageMiddleware: R.Middleware<null, RootState> =
  (store) => (next) => (action) => {
    if (action.type === 'login-slice/makeAuth/fulfilled') {
      const isRememberUser = store.getState().auth.rememberUser
      next(action)
      if (isRememberUser) {
        localStorage.setItem('news-app-token', action.payload.t)
      } else {
        sessionStorage.setItem('news-app-token', action.payload.t)
      }
    }
    return next(action)
  }
