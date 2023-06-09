import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { fetchUserData, loginActions } from './login-slice'

const actions = { ...loginActions, fetchUserData }
const useLoginActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default useLoginActions
