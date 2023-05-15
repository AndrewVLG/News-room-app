import { FunctionComponent } from 'react';
import HeaderWrapper from '../../entities/header-wrapper';
import Searchbar from "../../features/searchbar";
import Logo from '../../shared/ui/main-logo/main-logo';

import Categories from '../../entities/categories/categories';


const Header:FunctionComponent = () => {

  return (
    <HeaderWrapper>
      <Logo />
      <Searchbar />
      <Categories />
    </HeaderWrapper>
  )
}
export default Header;