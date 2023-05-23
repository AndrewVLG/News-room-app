import { PropsWithChildren } from 'react'
import Logo from '../../../shared/ui/main-logo/main-logo'
import s from './config/registration-wrap.module.css'

const RegistrationWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={s.regWrapper}>
      <div className={s.logo}>
        <Logo />
      </div>
      <h2>Страница регистрации</h2>
      {children}
    </div>
  )
}

export default RegistrationWrapper
