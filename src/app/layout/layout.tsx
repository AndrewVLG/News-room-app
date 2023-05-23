import { Outlet } from 'react-router'
import Header from '../../widgets/header/header'
import Footer from '../../widgets/footer/footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
