import { FunctionComponent } from 'react'
import { Wrapper } from '../../../shared/config/types'
import s from './config/searchbar-wrap.module.css'

const SearchbarWrapper: FunctionComponent<Wrapper> = ({ children }) => {
  return <div className={s.searchBar}>{children}</div>
}
export default SearchbarWrapper
