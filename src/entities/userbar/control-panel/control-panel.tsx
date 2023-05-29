import { ChangeEvent, FunctionComponent } from 'react'
import {
  CircularProgress,
  FormControlLabel,
  Link,
  Stack,
  Switch,
} from '@mui/material'
import ModalButton from './modal-button'

interface Control {
  authCompleat: boolean
  isRemember: boolean
  isLoading: boolean
  handleSwitch: (e: ChangeEvent<HTMLInputElement>) => void
  handleClick: () => void
}

const ControlPanel: FunctionComponent<Control> = ({
  authCompleat,
  isLoading,
  isRemember,
  handleClick,
  handleSwitch,
}) => {
  return (
    <Stack
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FormControlLabel
        control={<Switch onChange={handleSwitch} checked={isRemember} />}
        label='Запомнить меня'
      />

      {isLoading ? (
        <CircularProgress size={25} />
      ) : (
        <ModalButton
          onHandler={handleClick}
          text={authCompleat ? 'Выйти' : 'Вход'}
        />
      )}
      <Link href='history'>История просмотров</Link>
      <Link href='registration'>Регистрация</Link>
    </Stack>
  )
}
export default ControlPanel
