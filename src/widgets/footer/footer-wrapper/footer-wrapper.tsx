import { FC } from 'react'
import { Wrapper } from '../../../shared/config/types'
import s from './config/footer-wrapper.module.css'
const FooterWrapper: FC<Wrapper> = ({ children }) => {
  return <footer className={s.footer}>{children}</footer>
}
export default FooterWrapper
