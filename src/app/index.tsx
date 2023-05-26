import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from '@mui/material'

import { theme } from '../shared/config/theme'
import Loader from '../shared/ui/loader'
import useAuth from '../shared/hooks/use-auth'
import { router } from './app-routing'

const App = () => {
  const { isAuth } = useAuth()
  console.log(isAuth)
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  )
}
export default App
