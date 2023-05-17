import { FunctionComponent } from 'react'
import { Wrapper } from '../../../shared/config/types'

import s from './config/categories.module.css'

const CategoriesWrapper: FunctionComponent<Wrapper> = ({ children }) => {
  return <div className={s.categories}>{children}</div>
}
export default CategoriesWrapper
