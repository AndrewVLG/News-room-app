import { FunctionComponent } from 'react'
import { Drawer } from '@mui/material'
import Logo from '../../../shared/ui/main-logo/main-logo'
import { Sidebar } from '../../../shared/config/types'
import SidebarButton from '../sidebar-button/sidebar-button'
import s from './config/sidebar.module.css'

const SB: FunctionComponent<Sidebar> = ({ isOpen, onHandler }) => {
  return (
    <Drawer anchor='left' open={isOpen} onClose={onHandler}>
      <Logo />
      <div className={s.sidebar}>
        <SidebarButton href='/' text='Бизнес' />
        <SidebarButton href='/' text='Спорт' />
        <SidebarButton href='/' text='Здоровье' />
        <SidebarButton href='/' text='Развлечение' />
        <SidebarButton href='/' text='Наука' />
      </div>
    </Drawer>
  )
}
export default SB
