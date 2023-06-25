import { CircularProgress, Snackbar } from '@mui/material'
import BirthInput from '../../entities/registration/birth-input/'
import CustomInputs from '../../entities/registration/registration-inputs/registration-inputs'
import { RegistrationButton } from '../../shared/ui/basic-button'
import { useRegistration } from '../../shared/hooks/use-registration'

const Registration = () => {
  const { isLoading, isSuccess, message, passwordInputs, send, writeBirthDay } =
    useRegistration()
  const snackBarProps = snackProps(message)

  return (
    <form>
      {message && <Snackbar {...snackBarProps} />}
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

interface SnackProps {
  message: string
  open: boolean
  anchorOrigin: { vertical: 'top' | 'bottom'; horizontal: 'right' | 'left' }
}

function snackProps(message: string | null): SnackProps {
  const open = Boolean(message)
  return {
    message: message as string,
    open,
    anchorOrigin: { vertical: 'top', horizontal: 'right' },
  }
}
