import { ButtonBase, styled } from '@mui/material'

export const BasicButton = styled(ButtonBase)({
  color: 'white',
  width: '80px',
  height: '80px',
  marginLeft: '10px',

  '&:hover': {
    backgroundColor: '#FF1E0C',
    borderRadius: '2px',
  },
})
