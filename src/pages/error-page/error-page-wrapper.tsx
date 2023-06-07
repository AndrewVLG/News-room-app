import { PropsWithChildren } from 'react'
import s from './config/error-page.module.css'
const ErrorPageWrapper = ({ children }: PropsWithChildren) => {
  return <div className={s.errorPage}>{children}</div>
}
export default ErrorPageWrapper
