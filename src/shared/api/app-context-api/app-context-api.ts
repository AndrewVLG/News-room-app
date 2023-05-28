import { createContext, useContext } from 'react'
import { ArticleFromHistory } from '../../hooks/use-view-history'

interface User {
  login: string
  birthDay: string
}

interface AppC {
  isAuth: boolean
  user: User | null
  history: any[] | null
  addToHistory: (article: ArticleFromHistory) => void
}

export const AppContext = createContext<AppC>({
  isAuth: false,
  user: null,
  history: [],
  addToHistory: (article: ArticleFromHistory) => {},
})

export const useAppContext = () => {
  return useContext(AppContext)
}
