import { ChangeEvent, FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import {
  CircularProgress,
  FormControlLabel,
  Stack,
  Switch,
} from '@mui/material'

interface Control {
  authCompleat: boolean
  isRemember: boolean
  isLoading: boolean
  renderButton: () => JSX.Element
  handleSwitch: (e: ChangeEvent<HTMLInputElement>) => void
}

const ControlPanel: FunctionComponent<Control> = ({
  isLoading,
  isRemember,
  renderButton,
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

      {isLoading ? <CircularProgress size={25} /> : renderButton()}
      <Link to='/registration'>Регистрация</Link>
    </Stack>
  )
}
export default ControlPanel
