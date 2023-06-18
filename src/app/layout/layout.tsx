import { Outlet } from 'react-router'
import Header from '../../widgets/header/header'
import Footer from '../../widgets/footer/footer'
import Currency from '../../widgets/currency/currency'

const Layout = () => {
  return (
    <>
      <Header />
      <Currency />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
