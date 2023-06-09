import { FunctionComponent } from 'react'

import { Link } from 'react-router-dom'
import { ButtonBase, styled } from '@mui/material'
import { CategoryBtn } from '../../../shared/config/types'

const SidebarBtn = styled(ButtonBase)({
  color: 'black',
  width: '185px',
  height: '40px',
  '&:hover': {
    backgroundColor: '#1E90FF',
    borderRadius: '2px',
  },
})

const LinkBtn = styled('a')({
  color: 'black',
  textDecorationLine: 'none',
})

const SidebarButton: FunctionComponent<CategoryBtn> = ({ href, name }) => {
  return (
    <Link to={href}>
      <SidebarBtn>{name}</SidebarBtn>
    </Link>
  )
}
export default SidebarButton
