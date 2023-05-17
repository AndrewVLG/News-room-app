import Searchbar from '../../features/searchbar'
import Logo from '../../shared/ui/main-logo/main-logo'
import Categories from '../../entities/categories/categories'
import HeaderWrapper from './header-wrapper/'
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Searchbar />
      <Categories />
    </HeaderWrapper>
  )
}
export default Header
