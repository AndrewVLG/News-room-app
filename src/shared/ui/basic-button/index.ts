import { ButtonBase, styled } from '@mui/material'

export const BasicButton = styled(ButtonBase)({
  color: 'white',
  width: '80px',
  height: '80px',
  marginLeft: '10px',
  position: 'relative',

  '&:hover': {
    backgroundColor: '#FF1E0C',
    borderRadius: '2px',
  },
})
export const RegistrationButton = styled(ButtonBase)({
  color: 'white',
  width: '200px',
  height: '40px',
  marginLeft: '10px',
  fontSize: '20px',
  backgroundColor: '#1E90FF',
  '&:hover': {
    backgroundColor: '#FF1E0C',
    borderRadius: '4px',
    color: 'white',
  },
})
