import { FunctionComponent, useMemo, useState, useEffect } from 'react'
import { Stack } from '@mui/material'

import ArticleCard from '../../entities/article-card/article-card'
import { Article } from '../../shared/api/news-api'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useFavoritesAction } from '../../features/favorites/model/use-favorites-action'
import { User } from '../../shared/hooks/use-auth'
import { useScrollTop } from '../../shared/hooks/use-scroll-top'

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
  const login = user?.login as string
  const articles = useMemo(
    () => checkFavorite(data, user?.favorites || []),
    [data, user],
  )

  const { addToFavorites, deleteFavorite } = useFavoritesAction()

  useEffect(() => refresh(setUser), [isAuth])
  useScrollTop()
  return (
    <Stack spacing={2}>
      {articles.map((article: FavoriteArticle, id: number) => (
        <ArticleCard
          article={article}
          addToFavoritesList={() => {
            addToFavorites({ login, fav: article })
            refresh(setUser)
          }}
          deleteFromFavorites={() => {
            deleteFavorite({ login, fav: article })
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
