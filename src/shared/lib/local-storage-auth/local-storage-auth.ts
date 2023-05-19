import { rejects } from 'assert'
import FakeDatabase, { FakeDB } from './fake-db'

interface LSAuth {
  isLogin: boolean
  registration: () => void
  authorization: (login: string, password: string) => void
  authMe: (token: string) => void
}
export interface Response {
  isAuth: boolean
  t: string | null
}

const db = new FakeDatabase()

class LocalStorageAuth implements LSAuth {
  constructor(readonly isLogin: boolean) {
    db.init()
    this.isLogin = false
  }

  registration() {
    return
  }

  authorization(
    login: string | null,
    password: string | null,
  ): Promise<Response> {
    const user = db.findUser(login)
    if (!user) {
      return new Promise((_, rejected) => {
        setTimeout(() => rejected({ t: null, isAuth: false }), 1000)
      })
    }
    const isAuth = user?.password === password
    const t = Date.now()
    return new Promise<Response>((resolve, rejected) => {
      if (isAuth) {
        setTimeout(() => resolve({ isAuth, t: `${user?.login}${t}` }), 1000)
      } else {
        setTimeout(() => rejected({ t: null, isAuth: false }), 1000)
      }
    })
  }

  authMe(token: string): Promise<boolean> {
    if (!token) {
      return new Promise((_, rejected) => {
        rejected(false)
      })
    }
    const t = Date.now()
    const tokenLife = 180000
    const authTime = Number(token.match(/\d/g)?.join(''))
    const login = token.match(/\D/g)?.join('') as string
    const userIsFound = db.findUser(login)?.login === login
    const authOk = t - authTime < tokenLife
    return new Promise((resolve, rejected) => {
      if (userIsFound && authOk) {
        setTimeout(() => resolve(true), 1000)
      } else {
        setTimeout(() => rejected(false), 1000)
      }
    })
  }
}
export default LocalStorageAuth
