import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { Box, CircularProgress } from '@mui/material'
import { store } from './app-redux'
import { router } from './app-routing'

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
const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  )
}
export default App
