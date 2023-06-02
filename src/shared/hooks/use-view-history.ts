import { useState, useEffect } from 'react'
import { User } from './use-auth'

interface UseViewHistory {
  history: string[]
  clearHistory: () => void
  addToHistory: (article: string) => void
}

const useViewHistory = (user: User | null, isAuth: boolean): UseViewHistory => {
  const [history, setHistory] = useState<string[]>([])
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
  }, [user, isAuth])

  const addToHistory = (searchValue: string) => {
    if (history.indexOf(searchValue) > -1) {
      return
    }

    if (history.length >= 10) {
      setHistory((prev) => [searchValue, ...prev.slice(0, 11)])
    } else {
      setHistory((prev) => [searchValue, ...prev])
    }

    if (isAuth) {
      localStorage.setItem(
        `news-app-history-${user?.login}`,
        JSON.stringify(history),
      )
    } else {
      localStorage.setItem(`news-app-views-history`, JSON.stringify(history))
    }
  }

  const clearHistory = () => {
    if (isAuth) {
      localStorage.setItem(
        `news-app-history-${user?.login}`,
        JSON.stringify([]),
      )
    } else {
      localStorage.setItem(`news-app-views-history`, JSON.stringify([]))
    }
  }
  return { addToHistory, clearHistory, history }
}
export default useViewHistory
