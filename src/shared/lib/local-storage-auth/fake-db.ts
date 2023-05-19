interface User {
  login: string
  password: string
}
export interface FakeDB {
  init: () => void
  findUser: (login: string) => User | undefined
}
const users: User[] = [
  {
    login: 'Andrey',
    password: '123',
  },
  {
    login: 'Evgen',
    password: '321',
  },
]

class FakeDatabase implements FakeDB {
  init() {
    if (localStorage.getItem('users')) {
      return
    }
    localStorage.setItem('users', JSON.stringify(users))
  }
  findUser(login: string | null) {
    if (!localStorage.getItem('users')) {
      return
    } else {
      const data: User[] = JSON.parse(localStorage.getItem('users') as string)
      const user: User | undefined = data.find((user) => user.login === login)
      return user
    }
  }
}
export default FakeDatabase