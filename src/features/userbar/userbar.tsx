import { useState, MouseEvent, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/app-redux'
import UserbarWrapper from '../../entities/userbar/userbar-wrapper'
import LoginButton from '../../entities/userbar/login-button'
import ControlPanel from '../../entities/userbar/control-panel'
import ModalWrapper from '../../entities/userbar/modal-wrapper/'
import InputsGroup from '../../entities/userbar/inputs-group/input-group'
import useLoginActions from './model/use-login-actions'

const Userbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [rememberUser, setRememberUser] = useState<boolean>(false)
  const isOpen = Boolean(anchorEl)
  const { error, login, password, authComplete, isLoading } = useSelector(
    (state: RootState) => state.auth,
  )
  const { authMe, clearError, makeAuth, writeLogin, writePassword } =
    useLoginActions()

  useEffect(() => {
    authMe()
  }, [])
  useEffect(() => {
    if (authComplete) {
      setTimeout(() => setAnchorEl(null), 2000)
    }
  }, [authComplete])
  useEffect(() => {
    let t: NodeJS.Timeout
    if (error) {
      t = setTimeout(() => clearError(), 3000)
    }
    return () => {
      clearTimeout(t)
    }
  }, [error])

  const openMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }
  const onHandlerLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    writeLogin(e.currentTarget.value)
  }
  const onHandlerPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    writePassword(e.currentTarget.value)
  }
  const onHandlerButton = () => {
    makeAuth({ login, password, rememberUser })
  }
  const onHandlerSwitchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberUser(e.target.checked)
  }
  return (
    <UserbarWrapper>
      <LoginButton onHandler={openMenu} />
      <ModalWrapper anchor={anchorEl} isOpen={isOpen} onHandler={closeMenu}>
        <InputsGroup
          onHandlerLoginInput={onHandlerLoginInput}
          onHandlerPasswordInput={onHandlerPasswordInput}
        />
        <ControlPanel
          onHandlerSwitchInput={onHandlerSwitchInput}
          onHandlerButton={onHandlerButton}
          isRemember={rememberUser}
          authComplete={authComplete}
          error={error}
          isLoading={isLoading}
        />
      </ModalWrapper>
    </UserbarWrapper>
  )
}
export default Userbar
