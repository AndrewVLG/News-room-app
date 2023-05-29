import { useState, MouseEvent, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { Snackbar } from '@mui/material'

import { RootState } from '../../app/app-redux'
import UserbarWrapper from '../../entities/userbar/userbar-wrapper'
import LoginButton from '../../entities/userbar/login-button'
import ControlPanel from '../../entities/userbar/control-panel'
import ModalWrapper from '../../entities/userbar/modal-wrapper/'
import InputsGroup from '../../entities/userbar/inputs-group/inputs-group'
import useLoginActions from './model/use-login-actions'

const Userbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isOpen = Boolean(anchorEl)
  const { message, login, password, authComplete, isLoading, rememberUser } =
    useSelector((state: RootState) => state.auth)

  const {
    clearError,
    makeAuth,
    writeAuthLogin,
    writeAuthPassword,
    setRemember,
  } = useLoginActions()

  useEffect(() => {
    if (authComplete) {
      setTimeout(() => setAnchorEl(null), 2000)
    }
  }, [authComplete])

  useEffect(() => {
    let t: NodeJS.Timeout
    if (message) {
      t = setTimeout(() => clearError(), 2000)
    }
    return () => {
      clearTimeout(t)
    }
  }, [message])

  const openMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }
  const changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    writeAuthLogin(e.currentTarget.value)
  }
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    writeAuthPassword(e.currentTarget.value)
  }
  const makeLogin = () => {
    makeAuth({ login, password })
  }
  const memUser = (e: ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked)
  }
  return (
    <UserbarWrapper>
      <LoginButton onHandler={openMenu} />
      <ModalWrapper anchor={anchorEl} isOpen={isOpen} handleClick={closeMenu}>
        <InputsGroup
          handleChangeLogin={changeLogin}
          handleChangePassword={changePassword}
        />
        <ControlPanel
          authCompleat={authComplete}
          handleSwitch={memUser}
          handleClick={makeLogin}
          isRemember={rememberUser}
          isLoading={isLoading}
        />
      </ModalWrapper>
      <Snackbar
        message={message && message}
        open={Boolean(message)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </UserbarWrapper>
  )
}
export default Userbar
