import { PropsWithChildren } from 'react'
import s from './config/currency-wrapper.module.css'
const CurrencyWrapper = ({ children }: PropsWithChildren) => {
  return <div className={s.currency}>{children}</div>
}
export default CurrencyWrapper
