import { ChangeEventHandler, SyntheticEvent } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { RootState } from '../../app/app-redux'
import BirthInput from '../../entities/registration/birth-input/'
import { RegistrationButton } from '../../shared/ui/basic-button'
import CustomInputs from '../../entities/registration/registration-inputs/registration-inputs'
import validator from '../../shared/util/validator'
import useRegActions from './model/use-reg-actions'
import { InputStatus } from './model/types'

const Registration = () => {
  const { loginValue, passwordValue, confirmValue, birthDay } = useSelector(
    (state: RootState) => state.registration,
  )

  const {
    setLoginValue,
    setPasswordValue,
    setConfirmValue,
    sendRegData,
    setBirthDayValue,
  } = useRegActions()

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
  const { passwordLength, passwordSymbol, confirmStatus, isSuccess } =
    validator(passwordValue, confirmValue)
  const passwordInputs: {
    name: string
    alerts?: { message: string; status: InputStatus }[]
    handler: ChangeEventHandler<HTMLInputElement>
  }[] = [
    {
      name: 'Логин',
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

  return (
    <form>
      <CustomInputs child={passwordInputs} />
      <BirthInput handlerDateInput={writeBirthDay} />
      <RegistrationButton disabled={isSuccess} onClick={send} type='submit'>
        Зарегистрироваться
      </RegistrationButton>
    </form>
  )
}
export default Registration
