import { InputStatus } from '../config/types/types'

interface Validator {
  passwordLength: InputStatus
  passwordSymbol: InputStatus
  confirmStatus: InputStatus
  isSuccess?: boolean
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

const getResult = (value: Validator): boolean => {
  let isSuccess = true

  for (const key in value) {
    console.log(key)
    if (key !== InputStatus.success) {
      isSuccess = false
    }
  }
  return isSuccess
}

const validator = (
  password: string | null,
  confirm: string | null,
): Validator => {
  console.log(password, confirm)
  const passwordLength = checkPasswordLength(password)
  const passwordSymbol = checkSymbol(password)
  const confirmStatus = compareValue(password, confirm)
  const isSuccess = getResult({ passwordLength, confirmStatus, passwordSymbol })
  return { passwordLength, passwordSymbol, confirmStatus, isSuccess }
}
export default validator
