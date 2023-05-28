import { createContext, useContext } from 'react'
import { ArticleFromHistory } from '../../hooks/use-view-history'
import { Country } from '../news-api'

interface User {
  login: string
  birthDay: string
}

interface AppC {
  isAuth: boolean
  user: User | null
  history: any[] | null
  country: Country
  changeCountry: (country: Country) => void
  addToHistory: (article: ArticleFromHistory) => void
}

export const AppContext = createContext<AppC>({
  isAuth: false,
  user: null,
  country: 'us',
  history: [],
  changeCountry: (country: Country) => {},
  addToHistory: (article: ArticleFromHistory) => {},
})

export const useAppContext = () => {
  return useContext(AppContext)
}
