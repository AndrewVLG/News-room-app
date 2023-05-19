import { FunctionComponent, SyntheticEvent, ReactNode } from 'react'
import { Menu } from '@mui/material'
const paperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}

interface ModalWrap {
  anchor: HTMLElement | null
  isOpen: boolean
  onHandler: (e: SyntheticEvent<HTMLButtonElement>) => void
  children: ReactNode
}

const ModalWrapper: FunctionComponent<ModalWrap> = ({
  anchor,
  isOpen,
  onHandler,
  children,
}) => {
  return (
    <Menu
      anchorEl={anchor}
      id='user-menu'
      open={isOpen}
      onClose={onHandler}
      PaperProps={paperProps}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {children}
    </Menu>
  )
}
export default ModalWrapper
