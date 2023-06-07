import { FunctionComponent, useMemo } from 'react'
import { Stack } from '@mui/material'

import ArticleCard from '../../entities/article-card/article-card'
import { Article } from '../../shared/api/news-api'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useFavoritesAction } from '../../features/favorites/model/use-favorites-action'

interface Props {
  data: Article[]
}

export interface FavoriteArticle extends Article {
  isFavorite: boolean
}

const checkFavorite = (data: Article[], favorites: string[]) => {
  return data.reduce<FavoriteArticle[]>((articles, current) => {
    if (favorites.includes(current.url)) {
      return [...articles, { ...current, isFavorite: true }]
    } else {
      return [...articles, { ...current, isFavorite: false }]
    }
  }, [])
}
const TopHeadlines: FunctionComponent<Props> = ({ data }) => {
  const { user, isAuth } = useAppContext()
  const articles = useMemo(
    () => checkFavorite(data, user?.favorites || []),
    [data, isAuth],
  )
  const { addToFavorites } = useFavoritesAction()
  return (
    <Stack spacing={2}>
      {articles.map((article: FavoriteArticle, id: number) => (
        <ArticleCard
          article={article}
          addToFavoritesList={() => {
            addToFavorites({ login: user?.login as string, fav: article })
          }}
          deleteFromFavorites={() => {
            return
          }}
          isAuth={isAuth}
          key={id}
        />
      ))}
    </Stack>
  )
}
export default TopHeadlines
