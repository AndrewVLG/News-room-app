import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { theme } from '../shared/config/theme'
import Loader from '../shared/ui/loader'
import { store } from './app-redux'
import { router } from './app-routing'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </Provider>
  )
}
export default App
