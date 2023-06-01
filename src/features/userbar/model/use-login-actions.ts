import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { makeLogin, loginActions } from './login-slice'

const actions = { ...loginActions, makeLogin }
const useLoginActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default useLoginActions
