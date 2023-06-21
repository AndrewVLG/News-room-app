import { PropsWithChildren } from 'react'
import s from './config/currencies-wrapper.module.css'
const CurrenciesWrapper = ({ children }: PropsWithChildren) => {
  return <div className={s.currenciesWrapper}>{children}</div>
}
export default CurrenciesWrapper
