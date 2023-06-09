import { Suspense, useState } from 'react'
import { RouterProvider } from 'react-router'
import { withErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from '@mui/material'

import ErrorPage from '../pages/error-page'
import { theme } from '../shared/config/theme'
import Loader from '../shared/ui/loader'
import useAuth from '../shared/hooks/use-auth'
import { AppContext } from '../shared/api/app-context-api/app-context-api'
import useViewHistory from '../shared/hooks/use-view-history'
import { Country } from '../shared/api/news-api'
import { router } from './app-routing'

const App = () => {
  const { isAuth, user, refresh } = useAuth()
  const { addToHistory, clearHistory, history } = useViewHistory(user, isAuth)
  const [country, setCountry] = useState<Country>('us')

  const changeCountry = (country: Country) => {
    setCountry(country)
  }
  return (
    <AppContext.Provider
      value={{
        user,
        isAuth,
        country,
        history,
        refresh,
        changeCountry,
        addToHistory,
        clearHistory,
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

export default withErrorBoundary(App, {
  FallbackComponent: ErrorPage,
})
