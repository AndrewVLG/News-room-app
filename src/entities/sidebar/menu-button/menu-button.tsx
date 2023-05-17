import { FunctionComponent } from 'react'
import { Menu } from '@mui/icons-material'
import { BasicButton } from '../../../shared/ui/basic-button'
import { BaseButton } from '../../../shared/config/types'

const MenuButton: FunctionComponent<BaseButton> = ({ onHandler }) => {
  return (
    <BasicButton disableRipple onClick={onHandler}>
      <Menu />
    </BasicButton>
  )
}
export default MenuButton
