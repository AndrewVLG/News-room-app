import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchUserFavorites,
  addToFavorites,
  deleteFavorite,
} from './favorites-slice'

export const useFavoritesAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(
    { fetchUserFavorites, addToFavorites, deleteFavorite },
    dispatch,
  )
}
