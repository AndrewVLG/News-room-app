import * as R from 'redux'
import { regActions } from '../../../features/registration/model/registration-slice'
import {
  InputStatus,
  REDUCERS,
} from '../../../features/registration/model/types'
import { RootState } from '..'

const passwordCharacters = /!|#|@|%/
const checkData = (action: any, next: R.Dispatch<R.AnyAction>) => {
  switch (true) {
    case action.payload.length >= 5 && passwordCharacters.test(action.payload):
      next(
        regActions.setPasswordStatus([
          InputStatus.success,
          InputStatus.success,
        ]),
      )
      next(action)
      break

    case action.payload.length <= 5 && passwordCharacters.test(action.payload):
      next(
        regActions.setPasswordStatus([
          InputStatus.warning,
          InputStatus.success,
        ]),
      )
      break

    case action.payload.length >= 5 && !passwordCharacters.test(action.payload):
      next(
        regActions.setPasswordStatus([
          InputStatus.success,
          InputStatus.warning,
        ]),
      )
      break

    default:
      next(
        regActions.setPasswordStatus([
          InputStatus.warning,
          InputStatus.warning,
        ]),
      )
  }
}

export const registrationMiddleware: R.Middleware<null, RootState> =
  (store) => (next) => (action) => {
    if (
      !action.type.includes(REDUCERS.setPasswordValue) &&
      !action.type.includes(REDUCERS.setConfirmValue)
    ) {
      return next(action)
    }

    if (action.type.includes(REDUCERS.setPasswordValue)) {
      checkData(action, next)
    }

    if (action.type.includes(REDUCERS.setConfirmValue)) {
      next(action)
      const isMatched =
        store.getState().registration.passwordValue ===
        store.getState().registration.confirmValue
      if (isMatched) {
        next(regActions.setConfirmStatus(InputStatus.success))
      } else {
        next(regActions.setConfirmStatus(InputStatus.warning))
      }
    }

    const isOk =
      store
        .getState()
        .registration.passwordStatus.every(
          (status) => status === InputStatus.success,
        ) && store.getState().registration.confirmStatus === InputStatus.success

    if (isOk) {
      next(regActions.setButtonState(true))
    } else {
      next(regActions.setButtonState(false))
    }
  }
