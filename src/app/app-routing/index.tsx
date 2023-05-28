import { lazy } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const Layout = lazy(() => import('../layout'))
const MainPage = lazy(() => import('../../pages/main/main-page'))
const RegistrationPage = lazy(() => import('../../pages/registration'))
const ByCategory = lazy(() => import('../../pages/by-category'))
const HistoryPage = lazy(() => import('../../pages/history-page'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path=':category' element={<ByCategory />} />
        <Route path='history' element={<HistoryPage />} />
      </Route>
      <Route path='registration' element={<RegistrationPage />} />
    </>,
  ),
)
