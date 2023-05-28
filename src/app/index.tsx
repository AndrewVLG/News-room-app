import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from '@mui/material'

import { theme } from '../shared/config/theme'
import Loader from '../shared/ui/loader'
import useAuth from '../shared/hooks/use-auth'
import { AppContext } from '../shared/api/app-context-api/app-context-api'
import useViewHistory from '../shared/hooks/use-view-history'
import { router } from './app-routing'

const App = () => {
  const { isAuth, user } = useAuth()
  const { addToHistory, history } = useViewHistory(user, isAuth)
  return (
    <AppContext.Provider
      value={{
        user,
        isAuth,
        history,
        addToHistory,
      }}
    >
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </AppContext.Provider>
  )
}
export default App
