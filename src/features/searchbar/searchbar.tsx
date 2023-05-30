import { ChangeEventHandler } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/app-redux'

import { useSearchActions } from './model/searchbar-actions'

import SearchbarWrapper from '../../entities/searchbar/searchbar-wrapper'
import SearchButton from '../../entities/searchbar/search-button'
import SearchInput from '../../entities/searchbar/search-input'
import { useNavigate } from 'react-router'

const Searchbar = () => {
  const { isOpenSearch } = useSelector((state: RootState) => state.searchBar)
  const { setSearch } = useSearchActions()
  const navigate = useNavigate()
  const setSearchValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    navigate(`search/${e.target.value}`)
  }

  return (
    <SearchbarWrapper>
      <SearchButton onHandler={setSearch} />
      {isOpenSearch && <SearchInput handleChangeSearch={setSearchValue} />}
    </SearchbarWrapper>
  )
}
export default Searchbar
