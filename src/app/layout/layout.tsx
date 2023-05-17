import { Outlet } from 'react-router'
import Header from '../../widgets/header/header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default Layout
