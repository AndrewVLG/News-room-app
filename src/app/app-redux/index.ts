import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../../features/searchbar/model/searchbar-slice'
import { authReducer } from '../../features/userbar/model/login-slice'
import { regReducer } from '../../features/registration/model/registration-slice'
import { favoritesReducer } from '../../features/favorites/model/favorites-slice'
import { newsApi } from '../../shared/api/news-api'
import { registrationMiddleware } from './middleware/reg-middleware'
import { localStorageMiddleware } from './middleware/local-storage-middleware'

const rootReducer = combineReducers({
  searchBar: searchReducer,
  auth: authReducer,
  registration: regReducer,
  favorites: favoritesReducer,
  [newsApi.reducerPath]: newsApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      registrationMiddleware,
      localStorageMiddleware,
      newsApi.middleware,
    ),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
