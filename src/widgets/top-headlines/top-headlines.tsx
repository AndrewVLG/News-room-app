import { FunctionComponent, useEffect, useMemo } from 'react'
import { Stack } from '@mui/material'
import ArticleCard from '../../entities/article-card/article-card'
import { Article } from '../../shared/api/news-api'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import LocalStorageAuth from '../../shared/lib/local-storage-auth/local-storage-auth'
interface Props {
  data: Article[]
}

export interface ImportantArticle extends Article {
  isFavorite: boolean
}

const checkFavorite = (data: Article[], favorites: string[]) => {
  return data.reduce<ImportantArticle[]>((articles, current) => {
    if (favorites.includes(current.url)) {
      return [...articles, { ...current, isFavorite: true }]
    } else {
      return [...articles, { ...current, isFavorite: false }]
    }
  }, [])
}
const fakeServer = new LocalStorageAuth()
const TopHeadlines: FunctionComponent<Props> = ({ data }) => {
  const { user, isAuth } = useAppContext()
  const articles = useMemo(
    () => checkFavorite(data, user?.favorites || []),
    [data, isAuth],
  )
  const addFavorite = (article: ImportantArticle) => {
    fakeServer.addFavorite(user?.login as string, article)
  }
  useEffect(() => {
    if (user?.login) {
      fakeServer
        .getFavorites(user?.login as string)
        .then((data) => console.log(data))
        .catch((data) => console.log(data))
    }
  }, [user])
  return (
    <Stack spacing={2}>
      {articles.map((article: ImportantArticle, id: number) => (
        <ArticleCard
          article={article}
          addToFavorite={() => addFavorite(article)}
          isAuth={isAuth}
          key={id}
        />
      ))}
    </Stack>
  )
}
export default TopHeadlines
