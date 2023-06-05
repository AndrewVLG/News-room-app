import * as R from 'redux'
import { RootState } from '..'

export const localStorageMiddleware: R.Middleware<null, RootState> =
  (store) => (next) => (action) => {
    if (action.type === 'login-slice/makeAuth/fulfilled') {
      const isRememberUser = store.getState().auth.rememberUser

      if (isRememberUser) {
        localStorage.setItem('news-app-token', action.payload.t)
      } else {
        sessionStorage.setItem('news-app-token', action.payload.t)
      }
    }

    if (action.type === 'login-slice/logout') {
      localStorage.removeItem('news-app-token')
      sessionStorage.removeItem('news-app-token')
      window.location.reload()
    }
    return next(action)
  }
