import { FunctionComponent, MouseEvent } from 'react'
import { AccountCircle } from '@mui/icons-material'
import { BasicButton } from '../../../shared/ui/basic-button'

interface LoginBtn {
  onHandler: (e: MouseEvent<HTMLElement>) => void
}
const LoginButton: FunctionComponent<LoginBtn> = ({ onHandler }) => {
  return (
    <BasicButton onClick={onHandler}>
      <AccountCircle fontSize='large' />
    </BasicButton>
  )
}
export default LoginButton
