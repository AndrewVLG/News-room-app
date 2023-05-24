import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { regActions, sendRegData } from './registration-slice'
const useRegActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({ ...regActions, sendRegData }, dispatch)
}
export default useRegActions
