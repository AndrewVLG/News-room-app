import { bindActionCreators } from 'redux'
import { makeAuth, authMe, loginActions } from './login-slice'
import { useDispatch } from 'react-redux'
const actions = { ...loginActions, makeAuth, authMe }
const useLoginActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default useLoginActions
