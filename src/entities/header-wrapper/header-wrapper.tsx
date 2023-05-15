import { FunctionComponent } from "react";
import { IWrapper } from "../../shared/config/wrapper-types";
import s from './config/header.module.css';

const HeaderWrapper:FunctionComponent<IWrapper> = ({ children }) => {

  return (
    <header className={s.header}>
      { children }
    </header>
  )
}
export default HeaderWrapper;