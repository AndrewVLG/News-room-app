import { useState, MouseEvent, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { Snackbar } from '@mui/material'

import { RootState } from '../../app/app-redux'
import UserbarWrapper from '../../entities/userbar/userbar-wrapper'
import LoginButton from '../../entities/userbar/login-button'
import ControlPanel from '../../entities/userbar/control-panel'
import ModalWrapper from '../../entities/userbar/modal-wrapper/'
import InputsGroup from '../../entities/userbar/inputs-group/inputs-group'
import Profile from '../../entities/userbar/profile'
import ModalButton from '../../entities/userbar/control-panel/modal-button'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import useLoginActions from './model/use-login-actions'

const Userbar = () => {
  const { isAuth, user } = useAppContext()
  console.log(user)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isOpen = Boolean(anchorEl)
  const { message, login, password, loginCompleted, isLoading, rememberUser } =
    useSelector((state: RootState) => state.auth)

  const {
    clearError,
    makeLogin,
    writeAuthLogin,
    writeAuthPassword,
    setRemember,
    logout,
  } = useLoginActions()

  useEffect(() => {
    if (loginCompleted) {
      setTimeout(() => setAnchorEl(null), 2000)
    }
  }, [loginCompleted])

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
  const userLogin = () => {
    makeLogin({ login, password })
  }
  const memUser = (e: ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked)
  }
  const userLogout = () => {
    logout()
  }
  const renderButton = (): JSX.Element => {
    return isAuth ? (
      <ModalButton text='Выход' onHandler={userLogout} />
    ) : (
      <ModalButton text='Вход' onHandler={userLogin} />
    )
  }
  return (
    <UserbarWrapper>
      <LoginButton onHandler={openMenu} />
      <ModalWrapper anchor={anchorEl} isOpen={isOpen} handleClick={closeMenu}>
        {user ? (
          <Profile user={user} />
        ) : (
          <InputsGroup
            handleChangeLogin={changeLogin}
            handleChangePassword={changePassword}
          />
        )}
        <ControlPanel
          renderButton={renderButton}
          authCompleat={loginCompleted}
          handleSwitch={memUser}
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
