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
  loginValue: null | string
  passwordValue: null | string
  buttonIsActiv: boolean
  birthDay: null | string
  confirmValue: null | string
  passwordStatus: InputStatus[]
  confirmStatus: InputStatus
}
