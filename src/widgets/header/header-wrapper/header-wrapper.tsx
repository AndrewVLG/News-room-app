import { FunctionComponent } from 'react'
import { Wrapper } from '../../../shared/config/types'
import s from './config/header.module.css'

const HeaderWrapper: FunctionComponent<Wrapper> = ({ children }) => {
  return <header className={s.header}>{children}</header>
}
export default HeaderWrapper
