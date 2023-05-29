import * as R from 'redux'
import { RootState } from '..'

export const registrationMiddleware: R.Middleware<null, RootState> =
  (store) => (next) => (action) => {
    return next(action)
  }
