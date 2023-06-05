export interface Response {
  isAuth: boolean
  t: string | null
}
export interface AuthMeResponse {
  isAuth: boolean
  user: { login: string; birthDay: string; favorites: string[] } | null
}
export interface User {
  login: string | null
  password: string | null
  birthDay: string | null
}
