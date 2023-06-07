import { FavoriteArticle } from '../../../widgets/top-headlines/top-headlines'
import { Article } from '../../api/news-api'

interface User {
  login: string
  password: string
  birthDay: string
  favorites?: string[]
}

export interface FakeDB {
  init: () => void
  findUser: (login: string) => User | undefined
}

class FakeDatabase implements FakeDB {
  init() {
    if (
      localStorage.getItem('users') &&
      localStorage.getItem('news-app-articles')
    ) {
      return
    }
    localStorage.setItem('users', JSON.stringify([]))
    localStorage.setItem('news-app-articles', JSON.stringify([]))
  }

  /** --------------------- **/

  findUser(login: string | null) {
    if (!localStorage.getItem('users')) {
      return
    } else {
      const data: User[] = JSON.parse(localStorage.getItem('users') as string)
      const user: User | undefined = data.find((user) => user.login === login)
      return user
    }
  }

  /**------------------------**/

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string)
  }

  /** --------------------- **/

  pushUser(user: {
    login: string | null
    password: string | null
    birthDay: string | null
  }) {
    const users = JSON.parse(localStorage.getItem('users') as string)
    localStorage.setItem(
      'users',
      JSON.stringify([...users, { ...user, favorites: [] }]),
    )
  }

  /** --------------------- **/

  updateUser(user: User) {
    const users = JSON.parse(localStorage.getItem('users') as string)
    const userId = users.findIndex((u: User) => u.login === user.login)
    const newUsersList = [
      ...users.slice(0, userId),
      user,
      ...users.slice(userId + 1),
    ]
    localStorage.setItem('users', JSON.stringify(newUsersList))
  }

  /** --------------------- **/

  addArticle(article: FavoriteArticle) {
    const allArticles: FavoriteArticle[] = JSON.parse(
      localStorage.getItem('news-app-articles') as string,
    )

    const isFound = allArticles.find(
      (item: Article) => item.url === article.url,
    )

    if (isFound) {
      return
    }

    localStorage.setItem(
      'news-app-articles',
      JSON.stringify([...allArticles, { ...article, isFavorite: false }]),
    )
  }
  getAllArticles(): FavoriteArticle[] {
    return JSON.parse(localStorage.getItem('news-app-articles') as string)
  }
}
export default FakeDatabase
