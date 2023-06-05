import { createContext, useContext } from 'react'
import { Country } from '../news-api'

interface User {
  login: string
  birthDay: string
  favorites: string[]
}

interface AppC {
  isAuth: boolean
  user: User | null
  history: string[]
  country: Country
  changeCountry: (country: Country) => void
  addToHistory: (searchValue: string) => void
  clearHistory: () => void
}

export const AppContext = createContext<AppC>({
  isAuth: false,
  user: null,
  country: 'us',
  history: [],
  changeCountry: (country: Country) => {
    return
  },
  addToHistory: (searchValue: string) => {
    return
  },
  clearHistory: () => {
    return
  },
})

export const useAppContext = () => {
  return useContext(AppContext)
}
