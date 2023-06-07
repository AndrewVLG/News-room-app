import { FunctionComponent } from 'react'
import { Button } from '@mui/material'
import { Star, StarBorder } from '@mui/icons-material'
interface FavBtnProps {
  handleClick: () => void
  isFavorite: boolean
}
const FavoriteButton: FunctionComponent<FavBtnProps> = ({
  isFavorite,
  handleClick,
}) => {
  return (
    <Button
      onClick={handleClick}
      sx={{ color: '#FF810C' }}
      startIcon={
        isFavorite ? <Star fontSize='large' /> : <StarBorder fontSize='large' />
      }
    >
      В избранное
    </Button>
  )
}
export default FavoriteButton
