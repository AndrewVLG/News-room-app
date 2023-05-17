import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import s from './config/search.module.css'

const SearchInput = () => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Paper className={s['search-input']} component='form'>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder='Строка поиска' />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}
export default SearchInput
