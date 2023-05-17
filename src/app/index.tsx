import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './app-redux'
import { router } from './app-routing'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
export default App
