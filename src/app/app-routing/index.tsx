import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import MainPage from '../../pages/main/main-page'
import Layout from '../layout'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path=':category' element={<MainPage />} />
    </Route>,
  ),
)
