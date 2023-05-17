import { FunctionComponent } from 'react'
import { Wrapper } from '../../../shared/config/types'
import s from './config/sidebar.module.css'

const SidebarWrapper: FunctionComponent<Wrapper> = ({ children }) => {
  return <div className={s['side-bar']}>{children}</div>
}
export default SidebarWrapper
