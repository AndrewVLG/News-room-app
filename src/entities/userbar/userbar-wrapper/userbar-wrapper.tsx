import { FunctionComponent } from 'react'
import { Wrapper } from '../../../shared/config/types'
import s from './config/userbar-wrap.module.css'

const UserbarWrapper: FunctionComponent<Wrapper> = ({ children }) => {
  return <div className={s.userbar}>{children}</div>
}
export default UserbarWrapper
