import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from '../src/app/index'
import { store } from './app/app-redux'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
