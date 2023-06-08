import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/app-redux'
import LocalStorageAuth from '../lib/local-storage-auth/local-storage-auth'
const localStorageAuth = new LocalStorageAuth()
export interface User {
  login: string
  birthDay: string
  favorites?: string[]
}
interface UseAuth {
  isAuth: boolean
  refresh: (fn: any) => void
  user: User | null
}
const useAuth = (): UseAuth => {
  const localStorageToken = localStorage.getItem('news-app-token')
  const sessionStorageToken = sessionStorage.getItem('news-app-token')
  const { loginCompleted } = useSelector((state: RootState) => state.auth)
  const [isAuth, setAuth] = useState<boolean>(false)
  const [user, setUser] = useState<{ login: string; birthDay: string } | null>(
    null,
  )

  useEffect(() => {
    if (sessionStorageToken || localStorageToken) {
      localStorageAuth
        .authMe(localStorageToken || sessionStorageToken || '')
        .then((response) => {
          setUser(response.user)
          setAuth(response.isAuth)
        })
        .catch((response) => {
          setUser(null)
          setAuth(response.isAuth)
        })
    } else {
      setAuth(false)
      setUser(null)
    }
  }, [loginCompleted])
  const refresh = (fn: any) => {
    localStorageAuth
      .authMe(sessionStorageToken || localStorageToken || '')
      .then((response) => {
        fn(response.user)
      })
      .catch((response) => {
        fn(null)
      })
  }
  return { isAuth, user, refresh }
}
export default useAuth
