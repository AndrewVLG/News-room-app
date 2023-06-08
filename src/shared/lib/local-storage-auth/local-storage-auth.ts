import { FavoriteArticle } from '../../../widgets/top-headlines/top-headlines'
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
        setTimeout(() => resolve({ isAuth: true, t: `${login}:${t}` }), 1000)
      })
    }
  }

  /** ------------------------ **/

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
        setTimeout(() => resolve({ isAuth, t: `${user?.login}:${t}` }), 1000)
      } else {
        setTimeout(() => rejected({ t: null, isAuth: false }), 1000)
      }
    })
  }

  /** ------------------------ **/

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
    const tokenLife = 1800000
    const separator = token.indexOf(':')
    const authTime = Number(token.slice(separator + 1))
    const login = token.slice(0, separator) as string
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
                favorites: userIsFound.favorites as string[],
              },
            }),
          100,
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

  /** ------------------------ **/

  addFavorite(login: string, favorite: FavoriteArticle) {
    const user = db.findUser(login)
    if (!user) {
      return
    }

    if (user.favorites?.includes(favorite.url)) {
      return
    }
    const articles = db.getAllArticles()
    user.favorites?.push(favorite.url)
    db.updateUser(user)
    db.addArticle(favorite)
    const response = user.favorites?.reduce<FavoriteArticle[]>(
      (result, current: string) => {
        const article = articles.find((item) => item.url === current)
        if (article) {
          return [...result, { ...article, isFavorite: true }]
        } else {
          return result
        }
      },
      [],
    )
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), 1000)
    })
  }

  /** ------------------------ **/

  deleteFavorite(
    login: string,
    favorite: FavoriteArticle,
  ): Promise<FavoriteArticle[] | undefined> {
    const user = db.findUser(login)
    if (!user) {
      return Promise.reject()
    }

    if (!user.favorites) {
      return Promise.reject()
    }
    const articles = db.getAllArticles()
    const index = user.favorites?.indexOf(favorite.url)
    const newFavList = [
      ...user.favorites.slice(0, index),
      ...user.favorites.slice(index + 1),
    ]
    db.updateUser({ ...user, favorites: newFavList })
    const response = newFavList.reduce<FavoriteArticle[]>(
      (result, current: string) => {
        const article = articles.find((item) => item.url === current)
        if (article) {
          return [...result, { ...article, isFavorite: true }]
        } else {
          return result
        }
      },
      [],
    )
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), 300)
    })
  }

  /** ------------------------ **/

  getFavorites(login: string): Promise<FavoriteArticle[] | undefined> {
    const user = db.findUser(login)
    const articles = db.getAllArticles()
    if (!user) {
      return new Promise((_, rejected) => {
        setTimeout(() => rejected(), 1000)
      })
    }
    const response = user.favorites?.reduce<FavoriteArticle[]>(
      (result, current: string) => {
        const article = articles.find((item) => item.url === current)
        if (article) {
          return [...result, { ...article, isFavorite: true }]
        } else {
          return result
        }
      },
      [],
    )
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), 300)
    })
  }
}

export default LocalStorageAuth
