import { FunctionComponent } from 'react'
import { Drawer } from '@mui/material'
import Logo from '../../../shared/ui/main-logo/main-logo'
import { Sidebar } from '../../../shared/config/types'
import SidebarButton from '../sidebar-button/sidebar-button'
import buttons from '../../categories/buttons'
import s from './config/sidebar.module.css'

const SB: FunctionComponent<Sidebar> = ({ isOpen, onHandler }) => {
  return (
    <Drawer anchor='left' open={isOpen} onClose={onHandler}>
      <Logo />
      <div className={s.sidebar}>
        {buttons.map((button, id) => (
          <SidebarButton key={id} {...button} />
        ))}
      </div>
    </Drawer>
  )
}
export default SB
