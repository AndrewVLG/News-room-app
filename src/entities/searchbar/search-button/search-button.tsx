import { FunctionComponent } from 'react'
import { Search } from '@mui/icons-material'
import { BasicButton } from '../../../shared/ui/basic-button'
import { BaseButton } from '../../../shared/config/types'

const SearchButton: FunctionComponent<BaseButton> = ({ onHandler }) => {
  return (
    <BasicButton onClick={onHandler}>
      <Search />
    </BasicButton>
  )
}
export default SearchButton
