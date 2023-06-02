import { ChangeEventHandler } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/app-redux'
import SearchbarWrapper from '../../entities/searchbar/searchbar-wrapper'
import SearchButton from '../../entities/searchbar/search-button'
import SearchInput from '../../entities/searchbar/search-input'
import SearchHistoryList from '../../entities/searchbar/search-history-list'
import SearchHistoryItem from '../../entities/searchbar/search-history-item'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useSearchActions } from './model/searchbar-actions'

const Searchbar = () => {
  const { isOpenSearch, isOpenHistory } = useSelector(
    (state: RootState) => state.searchBar,
  )
  const { history } = useAppContext()
  const { setSearchState, setHistoryState } = useSearchActions()
  const navigate = useNavigate()
  const setSearchValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    navigate(`search/${e.target.value}`)
  }

  return (
    <>
      <SearchbarWrapper>
        <SearchButton onHandler={setSearchState} />
        {isOpenSearch && (
          <SearchInput
            handleChangeSearch={setSearchValue}
            handleClickHistoryButton={setHistoryState}
          />
        )}
      </SearchbarWrapper>
      {isOpenHistory && (
        <SearchHistoryList>
          {history.map((elem, id) => (
            <SearchHistoryItem
              text={elem}
              key={id}
              handleClick={setHistoryState}
            />
          ))}
        </SearchHistoryList>
      )}
    </>
  )
}
export default Searchbar
