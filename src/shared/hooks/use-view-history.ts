import { useState, useEffect } from 'react'
import { User } from './use-auth'

export interface ArticleFromHistory {
  source: string
  title: string
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
      const data = JSON.parse(appNewsUserHistory || '')
      setHistory(data || [])
    } else {
      const appNewsViewsHistory = localStorage.getItem('news-app-views-history')
      const data = appNewsViewsHistory && JSON.parse(appNewsViewsHistory)
      setHistory(data || [])
    }
  }, [user])

  useEffect(() => {
    if (history.length > 0 && !isAuth) {
      localStorage.setItem('news-app-views-history', JSON.stringify(history))
    }
    if (history.length > 0 && isAuth) {
      localStorage.setItem(
        `news-app-history-${user?.login}`,
        JSON.stringify(history),
      )
    }
  }, [history])

  const addToHistory = (article: ArticleFromHistory) => {
    setHistory((prev) => [...prev, article])
  }

  return { addToHistory, history }
}
export default useViewHistory
