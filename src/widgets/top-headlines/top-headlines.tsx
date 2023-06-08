import { FunctionComponent, useMemo, useState, useEffect } from 'react'
import { Stack } from '@mui/material'

import ArticleCard from '../../entities/article-card/article-card'
import { Article } from '../../shared/api/news-api'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useFavoritesAction } from '../../features/favorites/model/use-favorites-action'
import { User } from '../../shared/hooks/use-auth'

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
  const { isAuth, refresh } = useAppContext()
  const [user, setUser] = useState<User | null>(null)
  const articles = useMemo(
    () => checkFavorite(data, user?.favorites || []),
    [data, user],
  )
  const { addToFavorites, deleteFavorite } = useFavoritesAction()
  useEffect(() => refresh(setUser), [isAuth])
  console.log(user)
  return (
    <Stack spacing={2}>
      {articles.map((article: FavoriteArticle, id: number) => (
        <ArticleCard
          article={article}
          addToFavoritesList={() => {
            addToFavorites({ login: user?.login as string, fav: article })
            refresh(setUser)
          }}
          deleteFromFavorites={() => {
            deleteFavorite({ login: user?.login as string, fav: article })
            refresh(setUser)
          }}
          isAuth={isAuth}
          key={id}
        />
      ))}
    </Stack>
  )
}
export default TopHeadlines
