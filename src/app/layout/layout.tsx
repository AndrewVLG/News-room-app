import { Outlet } from 'react-router'
import Header from '../../widgets/header'
import Footer from '../../widgets/footer'
import HeaderWidgets from '../../widgets/header-widgets'

const Layout = () => {
  return (
    <>
      <Header />
      <HeaderWidgets />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
