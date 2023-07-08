import Categories from '../../entities/categories'
import Logo from '../../shared/ui/main-logo/main-logo'
import FooterWrapper from './footer-wrapper/footer-wrapper'

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo />
      <Categories />
    </FooterWrapper>
  )
}
export default Footer
