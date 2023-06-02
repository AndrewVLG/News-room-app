import { ListItem } from '@mui/material'
import { History } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const SearchHistoryItem = ({
  text,
  handleClick,
}: {
  text: string
  handleClick: () => void
}) => {
  return (
    <Link to={`search/${text}`}>
      <ListItem onClick={handleClick}>{text}</ListItem>
    </Link>
  )
}
export default SearchHistoryItem
