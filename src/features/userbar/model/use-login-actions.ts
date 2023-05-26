import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { makeAuth, loginActions } from './login-slice'

const actions = { ...loginActions, makeAuth }
const useLoginActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default useLoginActions
