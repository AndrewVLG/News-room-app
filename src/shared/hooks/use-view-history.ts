import { useState, useEffect } from 'react'
import { User } from './use-auth'

export interface ArticleFromHistory {
  source: string | null
  title: string | null
}

interface UseViewHistory {
  history: ArticleFromHistory[]
  addToHistory: (article: ArticleFromHistory) => void
}

const useViewHistory = (user: User | null, isAuth: boolean): UseViewHistory => {
  const [history, setHistory] = useState<ArticleFromHistory[]>([])
  useEffect(() => {
    if (user) {
      const appNewsUserHistory = localStorage.getItem(
        `news-app-history-${user.login}`,
      )
      const data = JSON.parse(appNewsUserHistory || 'null')
      setHistory(data || [])
    } else {
      const appNewsViewsHistory = localStorage.getItem('news-app-views-history')
      const data = JSON.parse(appNewsViewsHistory || 'null')
      setHistory(data || [])
    }
  }, [user])

  const addToHistory = (article: ArticleFromHistory) => {
    if (isAuth) {
      localStorage.setItem(
        `news-app-history-${user?.login}`,
        JSON.stringify([...history, article]),
      )
    } else {
      localStorage.setItem(
        `news-app-views-history`,
        JSON.stringify([...history, article]),
      )
    }
    setHistory((prev) => [...prev, article])
  }

  return { addToHistory, history }
}
export default useViewHistory
