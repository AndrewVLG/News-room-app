import FakeDatabase from './fake-db'
import { AuthMeResponse, Response, User } from './types'

const db = new FakeDatabase()

class LocalStorageAuth {
  constructor() {
    db.init()
  }

  registration({ login, password, birthDay }: User): Promise<Response> {
    const users = db.getAllUsers()
    const error =
      users.find((user) => user.login === login) &&
      'Пользователь с таким логином существует'
    if (error) {
      return new Promise((_, rej) => setTimeout(() => rej(), 1000))
    } else {
      db.pushUser({ login, password, birthDay })
      const t = Date.now()
      return new Promise((resolve) => {
        setTimeout(() => resolve({ isAuth: true, t: `${login}${t}` }), 1000)
      })
    }
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

  authMe(token: string): Promise<AuthMeResponse> {
    if (!token) {
      return new Promise((_, rejected) => {
        rejected({
          isAuth: false,
          user: null,
        })
      })
    }
    const t = Date.now()
    const tokenLife = 180000
    const authTime = Number(token.match(/\d/g)?.join(''))
    const login = token.match(/\D/g)?.join('') as string
    const userIsFound = db.findUser(login)
    const authOk = t - authTime < tokenLife
    return new Promise((resolve, rejected) => {
      if (userIsFound && authOk) {
        setTimeout(
          () =>
            resolve({
              isAuth: true,
              user: {
                login: userIsFound.login,
                birthDay: userIsFound.birthDay,
              },
            }),
          1000,
        )
      } else {
        setTimeout(
          () =>
            rejected({
              isAuth: false,
              user: null,
            }),
          1000,
        )
      }
    })
  }
}
export default LocalStorageAuth
