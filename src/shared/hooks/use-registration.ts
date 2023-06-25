import { ChangeEventHandler, SyntheticEvent, useEffect } from 'react'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import useRegActions from '../../features/registration/model/use-reg-actions'
import validator from '../util/validator'
import { RootState } from '../../app/app-redux'
import { InputStatus } from '../config/types/types'
import { Input } from '../../entities/registration/config/types'
interface UseRegistration {
  isLoading: boolean
  isSuccess: boolean | undefined
  message: string | null
  clearError: () => void
  writeBirthDay: (e: dayjs.Dayjs | null) => void
  send: (e: SyntheticEvent<HTMLButtonElement>) => void
  passwordInputs: Input[]
}
export const useRegistration = (): UseRegistration => {
  const {
    loginValue,
    passwordValue,
    confirmValue,
    birthDay,
    isLoading,
    message,
  } = useSelector((state: RootState) => state.registration)

  const {
    setLoginValue,
    setPasswordValue,
    setConfirmValue,
    sendRegData,
    setBirthDayValue,
    clearError,
  } = useRegActions()

  const {
    passwordLength,
    passwordSymbol,
    confirmStatus,
    isSuccess,
    loginNotEmpty,
  } = validator(loginValue, passwordValue, confirmValue)

  const writeUserLogin: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginValue(e.target.value)
  }

  const writeUserPassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPasswordValue(e.target.value)
  }

  const writeConfirmValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setConfirmValue(e.target.value)
  }
  const writeBirthDay = (e: dayjs.Dayjs | null) => {
    const data = e?.format('DD/MM/YYYY') as string | null
    setBirthDayValue(data)
  }
  const send = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()

    sendRegData({ login: loginValue, password: passwordValue, birthDay })
  }

  const passwordInputs = [
    {
      name: 'Логин',
      alerts: [
        {
          message: 'Логин не может быть пустым',
          status: loginNotEmpty as InputStatus,
        },
      ],
      handler: writeUserLogin,
    },
    {
      name: 'Пароль',
      alerts: [
        {
          message: 'Пароль должен быть не менее 5 символов',
          status: passwordLength,
        },
        {
          message:
            'Пароль должен состоять из латинских букв и содержать символы: !, #, @, %',
          status: passwordSymbol,
        },
      ],
      handler: writeUserPassword,
    },
    {
      name: 'Повторите пароль',
      alerts: [{ message: 'Пароли должны совпадать', status: confirmStatus }],
      handler: writeConfirmValue,
    },
  ]
  useEffect(() => {
    setTimeout(() => clearError(), 2000)
  }, [message])
  return {
    isLoading,
    isSuccess,
    message,
    clearError,
    passwordInputs,
    send,
    writeBirthDay,
  }
}
