export enum InputStatus {
  warning = 'warning',
  success = 'success',
}
export interface Request {
  login: string | null
  password: string | null
  birthDay: string | null
}
export enum REDUCERS {
  setLoginValue = 'setLoginValue',
  setPasswordValue = 'setPasswordValue',
  setConfirmValue = 'setConfirmValue',
  setBirthDayValue = 'setBirthDayValue',
  setConfirmStatus = 'setConfirmStatus',
  setPasswordStatus = 'setPasswordStatus',
  sendData = 'sendData',
  sendRegData = 'sendRegData',
  setButtonState = 'setButtonState',
}

export interface InitialState {
  message: string | null
  isLoading: boolean
  isSuccess: boolean
  loginValue: null | string
  passwordValue: null | string
  buttonIsActive: boolean
  birthDay: null | string
  confirmValue: null | string
}
