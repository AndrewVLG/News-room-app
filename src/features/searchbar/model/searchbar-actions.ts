import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchActions } from './searchbar-slice'

export const useSearchActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(searchActions, dispatch)
}
