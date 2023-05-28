import { useState, useEffect } from 'react'
import { User } from './use-auth'
import { Article } from '../api/news-api'

interface UseViewHistory {
  history: Article[]
  addToHistory: (article: Article) => void
}

const useViewHistory = (user: User | null, isAuth: boolean): UseViewHistory => {
  const [history, setHistory] = useState<Article[]>([])
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

  const addToHistory = (article: Article) => {
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
