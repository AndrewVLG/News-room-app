import { useSelector } from 'react-redux'
import { RootState } from '../../app/app-redux'

import { useSearchNewsQuery } from '../../shared/api/news-api'
import { useDebounce } from '../../shared/hooks/use-debounce'
import { useSearchActions } from './model/searchbar-actions'

import SearchbarWrapper from '../../entities/searchbar/searchbar-wrapper'
import SearchButton from '../../entities/searchbar/search-button'
import SearchInput from '../../entities/searchbar/search-input'

const Searchbar = () => {
  const { isOpenSearch } = useSelector((state: RootState) => state.searchBar)
  const { setSearch } = useSearchActions()
  const { handler, value } = useDebounce(700)
  const { data } = useSearchNewsQuery(
    {
      country: 'us',
      pageSize: '10',
      searchP: value,
    },
    { skip: value.length < 3 },
  )
  console.log(data)
  return (
    <SearchbarWrapper>
      <SearchButton onHandler={setSearch} />
      {isOpenSearch && <SearchInput handleChangeSearch={handler} />}
    </SearchbarWrapper>
  )
}
export default Searchbar
