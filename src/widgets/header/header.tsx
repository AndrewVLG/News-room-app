import Searchbar from '../../features/searchbar'
import Sidebar from '../../features/sidebar'
import Categories from '../../entities/categories/categories'
import Logo from '../../shared/ui/main-logo/main-logo'
import HeaderWrapper from './header-wrapper/'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Sidebar />
      <Searchbar />
      <Categories />
    </HeaderWrapper>
  )
}
export default Header
