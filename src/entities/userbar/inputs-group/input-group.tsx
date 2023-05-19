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
  onHandlerLoginInput: (e: ChangeEvent<HTMLInputElement>) => void
  onHandlerPasswordInput: (e: ChangeEvent<HTMLInputElement>) => void
}
const InputsGroup: FunctionComponent<Inputs> = ({
  onHandlerLoginInput,
  onHandlerPasswordInput,
}) => {
  return (
    <Stack sx={{ width: '200px', m: 1 }} spacing={2}>
      <FormControl>
        <InputLabel>Логин</InputLabel>
        <Input
          onChange={onHandlerLoginInput}
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
          onChange={onHandlerPasswordInput}
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
