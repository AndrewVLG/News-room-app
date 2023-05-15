import { FunctionComponent } from "react";
import s from './config/categories.module.css';
import { IWrapper } from "../../../shared/config/wrapper-types";
const CategoriesWrapper: FunctionComponent<IWrapper> = ({ children }) => {

  return (
    <div className={s.categories}>
      {children}
    </div>
  )
}
export default CategoriesWrapper;