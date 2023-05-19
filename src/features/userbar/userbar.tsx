import { useState, MouseEvent, useEffect, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/app-redux";
import UserbarWrapper from "../../entities/userbar/userbar-wrapper";
import LoginButton from "../../entities/userbar/login-button";
import ControlPanel from "../../entities/userbar/control-panel";
import ModalWrapper from "../../entities/userbar/modal-wrapper/";
import InputsGroup from "../../entities/userbar/inputs-group/inputs-group";
import useLoginActions from "./model/use-login-actions";

const Userbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [remember, setRememberUser] = useState<boolean>(false);
  const isOpen = Boolean(anchorEl);
  const { error, login, password, authComplete, isLoading } = useSelector(
    (state: RootState) => state.auth
  );
  const { authMe, clearError, makeAuth, writeLogin, writePassword } =
    useLoginActions();

  useEffect(() => {
    authMe();
  }, []);
  useEffect(() => {
    if (authComplete) {
      setTimeout(() => setAnchorEl(null), 2000);
    }
  }, [authComplete]);
  useEffect(() => {
    let t: NodeJS.Timeout;
    if (error) {
      t = setTimeout(() => clearError(), 3000);
    }
    return () => {
      clearTimeout(t);
    };
  }, [error]);

  const openMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  const changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    writeLogin(e.currentTarget.value);
  };
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    writePassword(e.currentTarget.value);
  };
  const makeLogin = () => {
    makeAuth({ login, password, remember });
  };
  const memUser = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberUser(e.target.checked);
  };
  return (
    <UserbarWrapper>
      <LoginButton onHandler={openMenu} />
      <ModalWrapper anchor={anchorEl} isOpen={isOpen} handleClick={closeMenu}>
        <InputsGroup
          handleChangeLogin={changeLogin}
          handleChangePassword={changePassword}
        />
        <ControlPanel
          handleSwitch={memUser}
          handleClick={makeLogin}
          isRemember={remember}
          authComplete={authComplete}
          error={error}
          isLoading={isLoading}
        />
      </ModalWrapper>
    </UserbarWrapper>
  );
};
export default Userbar;
