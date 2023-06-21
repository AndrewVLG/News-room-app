import { PropsWithChildren } from 'react'
import s from './config/header-widgets-wrapper.module.css'
const HeaderWidgetsWrapper = ({ children }: PropsWithChildren) => {
  return <div className={s.currency}>{children}</div>
}
export default HeaderWidgetsWrapper
