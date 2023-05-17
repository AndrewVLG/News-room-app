import { FunctionComponent } from 'react'
import { ButtonBase, styled } from '@mui/material'
import { CategoryBtn } from '../../../shared/config/types'

const SidebarBtn = styled(ButtonBase)({
  color: 'white',
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

const SidebarButton: FunctionComponent<CategoryBtn> = ({ href, text }) => {
  return (
    <SidebarBtn>
      <LinkBtn href={href}>{text}</LinkBtn>
    </SidebarBtn>
  )
}
export default SidebarButton
