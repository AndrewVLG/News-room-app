import { styled, ButtonBase } from '@mui/material'
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

export const CatButton = styled(ButtonBase)({
  height: '40px',
  width: '160px',
  '&:hover': {
    backgroundColor: '#FF1E0C',
    borderRadius: '2px',
    textShadow: 'black 1px 0 3px',
  },
})

export const CatLink = styled('a')({
  color: 'white',
  fontSize: '16px',
  textDecorationLine: 'none',
})
