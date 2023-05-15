import { FunctionComponent } from 'react';
import { IWrapper } from '../../../shared/config/wrapper-types';
import s from './config/searchbar-wrap.module.css';

const SearchbarWrapper: FunctionComponent<IWrapper> = ({ children }) => {

    return (
        <div className={s['search-bar']}>
            {children}
        </div>
    )
}
export default SearchbarWrapper;