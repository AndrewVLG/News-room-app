import { ChangeEventHandler, SyntheticEvent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { CircularProgress, Snackbar } from '@mui/material'

import { RootState } from '../../app/app-redux'
import BirthInput from '../../entities/registration/birth-input/'
import CustomInputs from '../../entities/registration/registration-inputs/registration-inputs'
import { Input } from '../../entities/registration/config/types'
import { RegistrationButton } from '../../shared/ui/basic-button'
import validator from '../../shared/util/validator'

import useRegActions from './model/use-reg-actions'
import { InputStatus } from './model/types'

const Registration = () => {
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

  const passwordInputs: Input[] = [
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
          message: 'Пароль должен содержать символы: !, #, @, %',
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

  return (
    <form>
      {message && (
        <Snackbar
          message={message}
          open={Boolean(message)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      )}
      <CustomInputs child={passwordInputs} />
      <BirthInput handlerDateInput={writeBirthDay} />
      {isLoading ? (
        <CircularProgress size={25} />
      ) : (
        <RegistrationButton disabled={!isSuccess} onClick={send} type='submit'>
          Зарегистрироваться
        </RegistrationButton>
      )}
    </form>
  )
}
export default Registration
