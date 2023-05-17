import { useState } from 'react'
import MenuButton from '../../entities/sidebar/menu-button'
import SidebarWrapper from '../../entities/sidebar/sidebar-wrapper'
import SB from '../../entities/sidebar/sb'

const Sidebar = () => {
  const [isOpenSidebar, setStateSidebar] = useState(false)
  const onHandler = () => {
    setStateSidebar((prev) => !prev)
  }
  return (
    <>
      <SB isOpen={isOpenSidebar} onHandler={onHandler} />
      <SidebarWrapper>
        <MenuButton onHandler={onHandler} />
      </SidebarWrapper>
    </>
  )
}
export default Sidebar
