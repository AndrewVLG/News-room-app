import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    warning: {
      main: '#BFBFBF',
    },
    secondary: {
      main: '#1E90FF',
    },
    success: {
      main: '#428542',
    },
  },
  components: {
    MuiAlert: {
      variants: [
        {
          props: { severity: 'warning' },
          style: { color: '#BFBFBF' },
        },
        {
          props: { severity: 'success' },
          style: { color: '#428542', border: '1px solid #428542' },
        },
      ],
    },
  },
})
