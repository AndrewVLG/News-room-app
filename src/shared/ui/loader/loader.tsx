import { Box, CircularProgress } from '@mui/material'
const Loader = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
      <h3 style={{ color: '#1E90FF' }}>Страница загружается</h3>
    </Box>
  )
}
export default Loader
