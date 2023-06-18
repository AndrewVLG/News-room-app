import { Outlet } from 'react-router'
import Header from '../../widgets/header'
import Footer from '../../widgets/footer'
import Currency from '../../widgets/currency'

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
