import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { Box, CircularProgress } from '@mui/material'
import { UIContext } from '../shared/hooks/use-ui-components'
import UIComponets from '../shared/ui'
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
    <UIContext.Provider value={UIComponets}>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </UIContext.Provider>
  )
}
export default App
