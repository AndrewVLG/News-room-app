import { ChangeEvent, FunctionComponent } from 'react'
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
} from '@mui/material'
import { AccountCircle, Key } from '@mui/icons-material'

interface Inputs {
  handleChangeLogin: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
}
const InputsGroup: FunctionComponent<Inputs> = ({
  handleChangeLogin,
  handleChangePassword,
}) => {
  return (
    <Stack sx={{ width: '200px', m: 1 }} spacing={2}>
      <FormControl>
        <InputLabel>Логин</InputLabel>
        <Input
          onChange={handleChangeLogin}
          startAdornment={
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel>Пароль</InputLabel>
        <Input
          onChange={handleChangePassword}
          startAdornment={
            <InputAdornment position='start'>
              <Key />
            </InputAdornment>
          }
        />
      </FormControl>
    </Stack>
  )
}
export default InputsGroup
