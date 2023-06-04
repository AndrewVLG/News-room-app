import s from './config/logo.module.css'
type LogoType = 'main' | 'secondary'
const Logo = ({ variant = 'main' }: { variant?: LogoType }) => {
  const className = `logo-${variant}`
  return (
    <a style={{ textDecoration: 'none' }} href='/'>
      <div className={s[className]}>
        <span>NewsRoom</span>
      </div>
    </a>
  )
}
export default Logo
