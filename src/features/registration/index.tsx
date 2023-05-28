import { ChangeEventHandler, SyntheticEvent } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { RootState } from '../../app/app-redux'
import BirthInput from '../../entities/registration/birth-input/'
import { RegistrationButton } from '../../shared/ui/basic-button'
import CustomInputs from '../../entities/registration/registration-inputs/registration-inputs'
import useRegActions from './model/use-reg-actions'
import { InputStatus } from './model/types'

const Registration = () => {
  const {
    loginValue,
    passwordValue,
    birthDay,
    passwordStatus,
    confirmStatus,
    buttonIsActive,
  } = useSelector((state: RootState) => state.registration)

  const {
    setLoginValue,
    setPasswordValue,
    setConfirmValue,
    sendRegData,
    sendData,
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
          status: passwordStatus[0],
        },
        {
          message: 'Пароль должен содержать символы: !, #, @, %',
          status: passwordStatus[1],
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
  console.log(birthDay)
  return (
    <form>
      <CustomInputs child={passwordInputs} />
      <BirthInput handlerDateInput={writeBirthDay} />
      <RegistrationButton
        disabled={!buttonIsActive}
        onClick={send}
        type='submit'
      >
        Зарегистрироваться
      </RegistrationButton>
    </form>
  )
}
export default Registration
