import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/app-redux'
import LocalStorageAuth from '../lib/local-storage-auth/local-storage-auth'
const localStorageAuth = new LocalStorageAuth()
const useAuth = () => {
  const localStorageToken = localStorage.getItem('news-app-token')
  const sessionStorageToken = sessionStorage.getItem('news-app-token')

  const { authComplete } = useSelector((state: RootState) => state.auth)
  const [isAuth, setAuth] = useState<boolean>(false)

  useEffect(() => {
    if (localStorageToken || sessionStorageToken) {
      localStorageAuth
        .authMe(localStorageToken || sessionStorageToken || '')
        .then((response) => setAuth(response))
        .catch((response) => setAuth(response))
    }
  }, [authComplete])
  return { isAuth }
}
export default useAuth
