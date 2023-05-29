import { log } from 'console'
import { InputStatus } from '../config/types/types'

interface Validator {
  loginNotEmpty?: InputStatus
  passwordLength: InputStatus
  passwordSymbol: InputStatus
  confirmStatus: InputStatus
  isSuccess?: boolean
}
const checkLogin = (login: string | null): InputStatus => {
  if (!login) {
    return InputStatus.warning
  }
  return InputStatus.success
}
const checkPasswordLength = (password: string | null): InputStatus => {
  if (!password || password.length < 5) {
    return InputStatus.warning
  }

  return InputStatus.success
}

const passwordSymbol = /!|#|@|%/

const checkSymbol = (password: string | null): InputStatus => {
  if (!password) {
    return InputStatus.warning
  }
  if (passwordSymbol.test(password)) {
    return InputStatus.success
  }
  return InputStatus.warning
}

const compareValue = (
  password: string | null,
  confirm: string | null,
): InputStatus => {
  if (!password || !confirm) {
    return InputStatus.warning
  }

  if (password === confirm) {
    return InputStatus.success
  } else {
    return InputStatus.warning
  }
}

const getResult = ({
  confirmStatus,
  passwordLength,
  passwordSymbol,
  loginNotEmpty,
}: Validator): boolean => {
  const isSuccess =
    confirmStatus === InputStatus.success &&
    passwordLength === InputStatus.success &&
    passwordSymbol === InputStatus.success &&
    loginNotEmpty === InputStatus.success

  return isSuccess
}

const validator = (
  login: string | null,
  password: string | null,
  confirm: string | null,
): Validator => {
  const loginNotEmpty = checkLogin(login)
  const passwordLength = checkPasswordLength(password)
  const passwordSymbol = checkSymbol(password)
  const confirmStatus = compareValue(password, confirm)
  const isSuccess = getResult({
    passwordLength,
    confirmStatus,
    passwordSymbol,
    loginNotEmpty,
  })
  return {
    passwordLength,
    passwordSymbol,
    confirmStatus,
    isSuccess,
    loginNotEmpty,
  }
}
export default validator
