import BirthInput from '../../entities/registration/birth-input/birth-input'
import PasswordInput from '../../entities/registration/password-input/password-input'
import { RegistrationButton } from '../../shared/ui/basic-button'
import { RegInput } from '../../shared/ui/inputs'

const Registration = () => {
  return (
    <form>
      <RegInput
        variant='outlined'
        color='secondary'
        focused
        label='Логин'
        sx={{ marginLeft: '16px' }}
      />
      <PasswordInput />
      <PasswordInput type='confirm' />
      <BirthInput />
      <RegistrationButton type='submit'>Зарегистрироваться</RegistrationButton>
    </form>
  )
}
export default Registration
