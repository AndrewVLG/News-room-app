import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserFavorites, addToFavorites } from './favorites-slice'

export const useFavoritesAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators({ getUserFavorites, addToFavorites }, dispatch)
}
