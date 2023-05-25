import { ChangeEventHandler, FunctionComponent } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import s from './config/search.module.css'
interface SearchInput {
  handleChangeSearch: ChangeEventHandler<HTMLInputElement>
}
const SearchInput: FunctionComponent<SearchInput> = ({
  handleChangeSearch,
}) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Paper className={s['search-input']} component='form'>
        <InputBase
          onChange={handleChangeSearch}
          sx={{ ml: 1, flex: 1 }}
          placeholder='Строка поиска'
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}
export default SearchInput
