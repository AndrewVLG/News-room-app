import { Link } from 'react-router-dom'
import s from './config/logo.module.css'
type LogoType = 'main' | 'secondary'
const Logo = ({ variant = 'main' }: { variant?: LogoType }) => {
  const className = `logo-${variant}`
  return (
    <Link style={{ textDecoration: 'none' }} to='/'>
      <div className={s[className]}>
        <span>NewsRoom</span>
      </div>
    </Link>
  )
}
export default Logo
